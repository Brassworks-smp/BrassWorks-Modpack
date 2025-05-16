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
            
            // Create the basic plushie block without any custom NBT data
            const plushie = Item.of('brassworks:sniffer_plushie');
            
            // Give plushie to player
            targetPlayer.give(plushie);
            
            // Broadcast message to all players
            const server = ctx.source.server;
            server.tell([
              Text.of('★ ').color('gold'),
              Text.of(playerName).color('aqua'),
              Text.of(' has received a ').color('white'),
              Text.of('Sniffer Plushie').color('#407744'),
              Text.of(' as a reward for winning the event! ').color('white'),
              Text.of('★').color('gold')
            ]);
            
            // Send confirmation to admin
            sender.sendSystemMessage(Text.of(`Gave a Sniffer Plushie to ${playerName}`).color('green'));
            
            return 1;
          })
      )
  );
});
