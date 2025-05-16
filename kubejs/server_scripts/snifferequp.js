ItemEvents.rightClicked(event => {
  const { item, player, hand, level, server } = event
  
  // Only run for main hand and only for the sniffer plushie
  if (hand !== 'main_hand' || !item || item.id !== 'brassworks:sniffer_plushie') return
  
  // Execute coshat command using execute as with server permissions
  server.scheduleInTicks(1, callback => {
    try {
      // Use execute as to run the command as the player but with server permissions
      server.runCommandSilent(`execute as ${player.name.string} run coshat`)
    } catch (e) {
      player.tell(Text.of("Couldn't equip the plushie!").color('red'))
      console.error("Error equipping plushie: " + e)
    }
  })
  
  // Cancel the event to prevent normal item use
  event.cancel()
})
