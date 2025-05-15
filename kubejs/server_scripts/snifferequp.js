ItemEvents.rightClicked(event => {
  const { item, player, hand, level, server } = event
  
  // Only run for main hand and only for the sniffer plushie
  if (hand !== 'main_hand' || !item || item.id !== 'brassworks:sniffer_plushie') return
  
  // Check if helmet slot is empty
  const helmetItem = player.headArmorItem
  
  if (helmetItem.isEmpty()) {
    // Get a copy of the item to place in helmet slot
    const plushieToEquip = item.copy()
    plushieToEquip.count = 1
    
    // Store the plushie directly in the helmet slot
    player.setHeadArmorItem(plushieToEquip)
    
    // Remove one from hand
    item.count--
    
    // Play equip sound
    player.playSound('minecraft:item.armor.equip_leather', 1.0, 1.0)
    
    // Cancel the event to prevent normal item use
    event.cancel()
  } else {
    // Head slot not empty
    player.tell(Text.of("You're already wearing something on your head!").color('red'))
  }
})
