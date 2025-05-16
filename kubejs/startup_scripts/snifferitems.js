StartupEvents.registry('block', event => {
  // Sniffer Carpet (like vanilla carpet)
  event.create('brassworks:sniffer_carpet')
    .model('brassworks:block/sniffer_carpet_block') // Use the custom block model
    .material('wool')
    .soundType('wool')  
    .hardness(0.1)
    .resistance(0.1)
    .requiresTool(false) // Shears are handled by the tag
    .tagBlock('minecraft:mineable/shears')
    .mapColor('COLOR_GREEN')
    .displayName('Sniffer Carpet')
    .box(0, 0, 0, 16, 1, 16, true); // Added collision box for carpet height


  // Sniffer Wool (like vanilla wool block)
  event.create('brassworks:sniffer_wool')
    .model('brassworks:block/sniffer_wool_block') // Use the custom block model
    .material('wool')
    .soundType('wool')  
    .hardness(0.8)
    .resistance(0.8)
    .requiresTool(false) // Shears are handled by the tag
    .tagBlock('minecraft:mineable/shears')
    .mapColor('COLOR_GREEN')
    .displayName('Sniffer Wool')
    .box(0, 0, 0, 16, 16, 16, true); // Added collision box for full block

});

StartupEvents.registry('item', event => {
  // Sniffer Fur Tuft
  event.create('brassworks:sniffer_fur')
    .displayName('Sniffer Fur')
    .texture('brassworks:item/sniffer_fur'); // Assuming this texture exists
});