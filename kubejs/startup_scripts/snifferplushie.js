// Register the Sniffer Plushie block
StartupEvents.registry('block', event => {
  // Create sniffer plushie as a block
  event.create('brassworks:sniffer_plushie', 'cardinal')
    // Option 1: Gold display name
    .displayName([
      Text.of('Event Winner\'s Sniffer Plushie').color('#FFAA00') // Gold color
    ])
    // Option 2: Set rarity (uncomment this line instead if you prefer)
    //.rarity('EPIC') // Makes item appear with purple/gold color
    // Use sound type and map color instead of material
    .soundType('wool')  
    .mapColor('COLOR_GREEN')
    .hardness(0.5) // Easy to break
    .resistance(0.5)
    .box(2.5, 0, 0, 13.5, 7, 16) // Adjusted box: 7 pixels high, 11 pixels wide (centered), full length
})

