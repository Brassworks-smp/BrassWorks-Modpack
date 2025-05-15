// Command to give Sniffer Plushie to event winners
ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event;
  
  event.register(
    Commands.literal('snifferplushie')
      .requires(src => src.hasPermission(2)) // Require permission level 2 (op/admin)
      .then(
        Commands.argument('player', Arguments.PLAYER.create(event))
          .executes(ctx => {
            const sender = ctx.source;
            const targetPlayer = Arguments.PLAYER.getResult(ctx, 'player');
            const playerName = targetPlayer.name.string;
            
            // Create the plushie with NBT data and completely override the tooltip
            // Fixed: Use backticks for string interpolation instead of double quotes
            const plushie = Item.of('brassworks:sniffer_plushie', {
              display: {
                Name: JSON.stringify({
                  text: `${playerName}'s Sniffer Plushie`,
                  color: "gold",
                  italic: false
                }),
                Lore: [
                  JSON.stringify({
                    text: `Awarded to ${playerName}`,
                    color: "green",
                    italic: false
                  }),
                  JSON.stringify({
                    text: "Congratulations on your victory!",
                    color: "aqua",
                    italic: false
                  }),
                  JSON.stringify({
                    text: "Right Click to equip or place on an item frame",
                    color: "gray",
                    italic: true
                  })
                ]
              },
              winner: playerName,
              AttributeModifiers: [],
              Enchantments: [{ id: "minecraft:unbreaking", lvl: 1 }],
              HideFlags: 7  // Hide enchantments, attributes, and unbreakable flags
            });
            
            // Give plushie to player
            targetPlayer.give(plushie);
            
            // Broadcast message to all players
            // Fixed: Use proper broadcast method for your KubeJS version
            const server = ctx.source.server;
            
            // Try different broadcast methods depending on your KubeJS version
            try {
              // Method 1: Using tellAll
              server.tellAll([
                Text.of('★ ').color('gold'),
                Text.of(playerName).color('aqua'),
                Text.of(' has received a ').color('white'),
                Text.of('Sniffer Plushie').color('#407744'),
                Text.of(' as a reward for winning the event! ').color('white'),
                Text.of('★').color('gold')
              ]);
            } catch (e) {
              // Method 2: Using runCommandSilent for a fallback broadcast
              server.runCommandSilent(`tellraw @a ["",{"text":"★ ","color":"gold"},{"text":"${playerName}","color":"aqua"},{"text":" has received a ","color":"white"},{"text":"Sniffer Plushie","color":"#407744"},{"text":" as a reward for winning the event! ","color":"white"},{"text":"★","color":"gold"}]`);
            }
            
            // Send confirmation to admin
            sender.sendSystemMessage(Text.of(`Gave a Sniffer Plushie to ${playerName}`).color('green'));
            
            return 1;
          })
      )
  );
});
