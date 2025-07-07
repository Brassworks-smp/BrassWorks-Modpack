StartupEvents.registry("minecraft:enchantment", event => {
    event.create("brassworks:chained_mining")
        .category("digger")
        .maxLevel(2)
})

const chainmineblocks = new Set([
    "minecraft:deepslate_redstone_ore",
    "minecraft:deepslate_emerald_ore",
    "minecraft:deepslate_diamond_ore",
    "minecraft:deepslate_copper_ore",
    "minecraft:deepslate_lapis_ore",
    "minecraft:deepslate_coal_ore",
    "salt:deepslate_rock_salt_ore",
    "minecraft:deepslate_gold_ore",
    "minecraft:deepslate_iron_ore",
    "minecraft:nether_quartz_ore",
    "minecraft:nether_gold_ore",
    "create:deepslate_zinc_ore",
    "minecraft:ancient_debris",
    "minecraft:redstone_ore",
    "minecraft:diamond_ore",
    "minecraft:emerald_ore",
    "minecraft:copper_ore",
    "minecraft:lapis_ore",
    "minecraft:coal_ore",
    "minecraft:gold_ore",
    "salt:rock_salt_ore",
    "minecraft:iron_ore",
    "create:zinc_ore"
])

ForgeEvents.onEvent("net.minecraftforge.event.level.BlockEvent$BreakEvent", event => global.Chained$BlockEvent$BreakEvent(event))

global.Chained$BlockEvent$BreakEvent = (/**@type {Internal.BlockEvent$BreakEvent} */ event) => {
    const {state, pos, player} = event
    const {mainHandItem, level} = player
    const chainedMiningLevel = mainHandItem.getEnchantmentLevel("brassworks:chained_mining")
    if(chainedMiningLevel == 0) return;
    if(!player.hasCorrectToolForDrops(state)) return;

    const targetBlockId = String(state.block.id)
    if (!chainmineblocks.has(targetBlockId)) return;

    let totalExp = 0
    const totalDrops = []
    const expOrb = level.createEntity("experience_orb")
    const $Block = Java.loadClass("net.minecraft.world.level.block.Block")
    const $RandomSource = Java.loadClass("net.minecraft.util.RandomSource").create()
    const pseudoMining = (/**@type {BlockPos_} */offsetPos) => {
        const offsetBlockState = level.getBlockState(offsetPos)
        const offsetBlockId = String(offsetBlockState.block.id)
        
        if (offsetBlockId !== targetBlockId) return;
        if (!chainmineblocks.has(offsetBlockId)) return;

        const silkTouch = mainHandItem.getEnchantmentLevel("minecraft:silk_touch")||0
        const fortune = mainHandItem.getEnchantmentLevel("minecraft:fortune")||0
        const exp = offsetBlockState.getExpDrop(level, $RandomSource, offsetPos, fortune, silkTouch)
        totalExp += exp
        const drops = $Block.getDrops(offsetBlockState, level, offsetPos, level.getBlockEntity(offsetPos), player, mainHandItem)
        drops.forEach(drop => totalDrops.push(drop))
        level.destroyBlock(offsetPos, false, player, 3)
        player.damageHeldItem("main_hand", 1)
        player.addExhaustion(0.15)
        return true
    }

    const maxRadius = chainedMiningLevel
    const maxBlocks = (2 * maxRadius + 1) * (2 * maxRadius + 1) * (maxRadius + 1)
    const startingPosArray = [pos]
    let minedBlocks = 0

    while(startingPosArray.length && minedBlocks < maxBlocks){
        let startingPos = startingPosArray.shift()
        let miningResult = pseudoMining(startingPos)
        if(!miningResult) continue;
        [
            startingPos.above(), startingPos.below(),
            startingPos.east(), startingPos.west(),
            startingPos.south(), startingPos.north()
        ]
        .filter(v => JavaMath.max(JavaMath.abs(v.y - pos.y), JavaMath.max(JavaMath.abs(v.x - pos.x), JavaMath.abs(v.z - pos.z))) <= maxRadius)
        .map(v => new BlockPos(v))
        .forEach(pos => startingPosArray.push(pos))
        minedBlocks++
    }
    
    if(totalExp){
        expOrb.nbt.putInt("value", totalExp)
        expOrb.setPosition(pos.center.x(), pos.center.y(), pos.center.z())
        expOrb.spawn()
    }

    totalDrops.forEach(drop => {
        const dropEntity = level.createEntity("item")
        dropEntity.item = drop
        dropEntity.setPosition(pos.center.x(), pos.center.y(), pos.center.z())
        dropEntity.spawn()
    })
}
