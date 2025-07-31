//const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
//const BlockPos = Java.loadClass("net.minecraft.core.BlockPos")
const OpenPACServerAPI = Java.loadClass("xaero.pac.common.server.api.OpenPACServerAPI")
const PlayerConfigOptions = Java.loadClass("xaero.pac.common.server.player.config.api.PlayerConfigOptions");


const buyableConfigIndex = 2
const chunkPrice = 32 //price in spurs
//const chunkLimit = 4 //limit in how many spawn chunks can be bought

ServerEvents.commandRegistry(event => {
    let { commands: Commands, arguments: Arguments, builtinSuggestions: Suggestions } = event;

    event.register(
        Commands.literal('usePlotBoard')
        .requires(source => source.hasPermission(0))
        .executes(ctx => {
            const player = ctx.source.playerOrException

            const OpacServerApi = OpenPACServerAPI.get(player.server)
            const ClaimManager = OpacServerApi.getServerClaimsManager()
            const PlayerConfigs = OpacServerApi.getPlayerConfigs()

            const ServerClaimInfo = ClaimManager.get(player.level.getDimension(), Math.floor(player.x / 16), Math.floor(player.z / 16))

            //server claims seem to use uuid 0000000...
            try {
                if (ServerClaimInfo.playerId.toString() != "00000000-0000-0000-0000-000000000000" ||
                        ServerClaimInfo.subConfigIndex != buyableConfigIndex) {
                    throw "";
                }
            }catch (error) {
                player.runCommandSilent(`tellraw @s {"text":"The chunk you're trying to buy isn't on sale.","color":"red"}`)
                return 1;
            }


            //check if player has at least 1 avaiable claim
            //THIS DOESN'T WORK, I think. calling getPlayerInfo just crashes the game and hasPlayerInfo always seems to return false no matter what, so I cant know how many chunks the player actually has.
            const config = PlayerConfigs.getLoadedConfig(player.id)

            // const baseChunks = ClaimManager.getPlayerBaseClaimLimit(player.id)
            // const bonusChunks = config.getEffective(PlayerConfigOptions.BONUS_CHUNK_CLAIMS)
            // if (ClaimManager.hasPlayerInfo(player.id)) {
            //     const claimedChunks = ClaimManager.getPlayerInfo(player.id).getClaimCount()
            // } else {
            //     player.tell(ClaimManager.hasPlayerInfo(player.id))
            //     player.tell("Error, no PlayerInfo found.")
            //     return 1;
            // }

            // if (!(claimedChunks<(baseChunks+bonusChunks))) {
            //     player.tell("You need to have at least 1 chunk avaiable to claim.")
            //     return 1;
            // }

            //actually buying the chunk
            let canAfford = false
            let itemStack
            for (const item of player.inventory.allItems) {
                if (item.id=="numismatics:spur" && item.count >= chunkPrice) {
                    itemStack = item;
                    canAfford = true;
                    break;
                }
            }

            if (canAfford==true){
                //this is kind of unecesary but imma add it just in case .claim were to fail for whatev reason.
                ClaimManager.unclaim(
                    player.level.getDimension(),
                    Math.floor(player.x/16),
                    Math.floor(player.z/16)
                )
                itemStack.setCount(itemStack.count - chunkPrice) //remove spurs from inv

                // ClaimManager.tryToClaim( //this may not work well if without the avaiable chunks check
                ClaimManager.claim(
                    player.level.getDimension(),
                    player.getUuid(),
                    config.getSubIndex(),
                    Math.floor(player.x/16),
                    Math.floor(player.z/16),
                    false
                )
                
                

                player.runCommandSilent(`tellraw @s {"text":"Succefully bought and claimed!","color":"green"}`)
                player.runCommandSilent("/execute as @s at @s run playsound create:stock_ticker_trade player @s")
                return 1;
            } else {
                player.runCommandSilent(`tellraw @s {"text":"You dont have enough money to buy this claim.","color":"red"}`)
                return 1;
            }

        })
    )
})

BlockEvents.rightClicked(event => {
    const { block, player, server } = event;
    const shopBlocks = [
        'brassworks:shop_1',
        'brassworks:shop_2',
        'brassworks:shop_3',
        'brassworks:shop_4'
    ];
    if (shopBlocks.includes(block.id)) {
        server.runCommandSilent(`openguiscreen shop ${player.name.string}`);
        server.runCommandSilent(`execute at ${player.name.string} run playsound minecraft:ui.cartography_table.take_result player @a ~ ~ ~ 0.5`);
    }
});
