// Register the Sniffer Plushie item
StartupEvents.registry('item', event => {
  // Create sniffer plushie as a regular item that can be placed in head slot
  event.create('brassworks:sniffer_plushie')
    .displayName([
      Text.of('Sniffer').color('#407744'), // Green for the body
      Text.of(' Plushie').color('#A73125')  // Red for details
    ])
    .modelJson({
      parent: 'brassworks:item/sniffer_plushie'
    })
    // Add vanilla equipment slot compatibility
    .tag('minecraft:equippable')
    .tag('minecraft:equippable/head')
    // Specify equipment slot but don't make it actually a helmet
    .maxStackSize(1)
})