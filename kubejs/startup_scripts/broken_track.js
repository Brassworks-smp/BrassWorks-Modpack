StartupEvents.registry('block', event => {
  // Destroyed Track 1
  event.create('brassworks:destroyedtrack_1', 'cardinal')
    .material('metal')
    .soundType('metal')  
    .hardness(2.0)
    .resistance(6.0)
    .transparent(true)
    .renderType('cutout') // Changed to cutout to prevent culling
    .fullBlock(false) // Mark as not a full block
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .mapColor('COLOR_GRAY')
    .displayName('Destroyed Track Type 1')
    .box(0.01, 0, 0.01, 15.99, 4, 15.99, true); // Just barely smaller than a full block

  // Destroyed Track 2
  event.create('brassworks:destroyedtrack_2', 'cardinal')
    .material('metal')
    .soundType('metal')  
    .hardness(2.0)
    .resistance(6.0)
    .transparent(true)
    .renderType('cutout') // Changed to cutout to prevent culling
    .fullBlock(false) // Mark as not a full block
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .mapColor('COLOR_GRAY')
    .displayName('Destroyed Track Type 2')
    .box(0.01, 0, 0.01, 15.99, 4, 15.99, true); // Just barely smaller than a full block

  // Destroyed Track 3
  event.create('brassworks:destroyedtrack_3', 'cardinal')
    .material('metal')
    .soundType('metal')  
    .hardness(2.0)
    .resistance(6.0)
    .transparent(true)
    .renderType('cutout') // Changed to cutout to prevent culling
    .fullBlock(false) // Mark as not a full block
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .mapColor('COLOR_GRAY')
    .displayName('Destroyed Track Type 3')
    .box(0.01, 0, 0.01, 15.99, 4, 15.99, true); // Just barely smaller than a full block
})