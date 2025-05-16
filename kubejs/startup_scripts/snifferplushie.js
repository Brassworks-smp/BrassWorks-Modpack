// Register the Sniffer Plushie block
StartupEvents.registry('block', event => {
  // Create sniffer plushie as a block
  event.create('brassworks:sniffer_plushie', 'cardinal')
    .displayName([
      Text.of('Sniffy Plushie').color('#FFAA00') // Gold color
    ])
    .soundType('wool')  
    .mapColor('COLOR_GREEN')
    .renderType('translucent')
    .hardness(0.5) // Easy to break
    .resistance(0.5)
    .box(4.5, 0, 6, 11.5, 7, 16)
    .box(5.5, 0, 0, 10.5, 5, 6)
    .box(2.5, 0, 6.5, 4.5, 2, 8.5) 
    .box(11.5, 0, 6.5, 13.5, 2, 8.5)
    .box(2.5, 0, 10, 4.5, 2, 12)
    .box(11.5, 0, 10, 13.5, 2, 12)
    .box(2.5, 0, 13.5, 4.5, 2, 15.5)
    .box(11.5, 0, 13.5, 13.5, 2, 15.5)
    .item(item => {
      item.maxStackSize(1) // Make the item unstackable
    })
})

