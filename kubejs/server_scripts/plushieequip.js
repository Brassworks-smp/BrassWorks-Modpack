ItemEvents.rightClicked(event => {
  const { item, player, hand, server } = event; // Removed 'level' as it's not used

  // Define a list of items that can trigger this script
  const equippablePlushies = [
    'brassworks:sniffer_plushie',

  ];

  // Only run for main hand and only for items in the equippablePlushies list
  if (hand !== 'main_hand' || !item || !equippablePlushies.includes(item.id)) return;

  // Execute coshat command using execute as with server permissions
  server.scheduleInTicks(1, () => { // Simplified callback to an arrow function
    try {
      // Use execute as to run the command as the player but with server permissions
      server.runCommandSilent(`execute as ${player.name.string} run coshat`);
    } catch (e) {
      player.tell(Text.of("Couldn't equip the plushie!").color('red'));
      console.error("Error equipping plushie: " + e);
    }
  });

  // Cancel the event to prevent normal item use
  event.cancel();
})
