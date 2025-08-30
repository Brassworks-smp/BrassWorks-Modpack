// Register the Sniffer Plushie block
StartupEvents.registry('block', event => {
  // Helper function to create plushie blocks (now defined inside the event handler)
  function createPlushie(id, displayName, mapColor, boxesArray) {
    let blockBuilder = event.create(id, 'cardinal') // 'event' is now from the outer scope
      .displayName(displayName)
      .soundType('wool') // Default sound type
      .mapColor(mapColor)
      .renderType('translucent') // Default render type
      .hardness(0.5) // Default hardness
      .resistance(0.5); // Default resistance

    boxesArray.forEach(boxArgs => {
      // Use apply instead of the spread operator
      blockBuilder = blockBuilder.box.apply(blockBuilder, boxArgs);
    });

    blockBuilder.item(item => {
      item.maxStackSize(1); // Default max stack size
    });
  }


  createPlushie(
    'brassworks:sniffer_plushie',
    'Sniffy Plushie',
    'COLOR_GREEN',
    [
      [4.5, 0, 6, 11.5, 7, 16],
      [5.5, 0, 0, 10.5, 5, 6],
      [2.5, 0, 6.5, 4.5, 2, 8.5],
      [11.5, 0, 6.5, 13.5, 2, 8.5],
      [2.5, 0, 10, 4.5, 2, 12],
      [11.5, 0, 10, 13.5, 2, 12],
      [2.5, 0, 13.5, 4.5, 2, 15.5],
      [11.5, 0, 13.5, 13.5, 2, 15.5]
    ]
  );

  createPlushie(
    'brassworks:blue_axolotl_plushie',
    'Blue Axolotl Plushie',
    'COLOR_LIGHT_BLUE',
    [
      [5, 0, 4, 11, 3, 12], 
      [11, 0, 3, 15, 0, 6], 
      [11, 0, 9, 15, 0, 12],
      [1, 0, 3, 5, 0, 6],   
      [1, 0, 9, 5, 0, 12],  
      [8, 0, 12, 8, 4, 16], 
      [8, 3, 4, 8, 4, 12],  
      [5, 0, 0, 11, 4, 4],  
      [5, 4, 4, 11, 6, 4],  
      [3, 0, 4, 5, 6, 4],   
      [11, 0, 4, 13, 6, 4]  
    ]
  );

  createPlushie(
    'brassworks:pink_axolotl_plushie',
    'Pink Axolotl Plushie',
    'COLOR_PINK',
    [
      [5, 0, 4, 11, 3, 12], 
      [11, 0, 3, 15, 0, 6], 
      [11, 0, 9, 15, 0, 12],
      [1, 0, 3, 5, 0, 6],   
      [1, 0, 9, 5, 0, 12],  
      [8, 0, 12, 8, 4, 16], 
      [8, 3, 4, 8, 4, 12],  
      [5, 0, 0, 11, 4, 4],  
      [5, 4, 4, 11, 6, 4],  
      [3, 0, 4, 5, 6, 4],   
      [11, 0, 4, 13, 6, 4]  
    ]
  );

  createPlushie(
    'brassworks:glow_squid_plushie',
    'Glow Squid Plushie',
    'COLOR_CYAN',
    [
      [6, 1, 6, 10, 7, 10],
      [7.5, 0, 10, 8.5, 1, 15],
      [10, 0, 7.5, 15, 1, 8.5],
      [7.5, 0, 1, 8.5, 1, 6],
      [1, 0, 7.5, 6, 1, 8.5],
      [1, 0, 7.5, 6, 1, 8.5],
      [10, 0, 7.5, 15, 1, 8.5],
      [10, 0, 7.5, 15, 1, 8.5],
      [7.5, 0, 1, 8.5, 1, 6] 
    ]
  );

  createPlushie(
    'brassworks:steven_uk_plushie',
    'Steven_UK Plushie',
    'COLOR_CYAN',
    [
      [5, 0, 8, 11, 8, 12],
      [1.5, 1.25, 8.75, 4, 7.25, 11.25],
      [11.75, 0.75, 9, 14.25, 6.75, 11.5],
      [4, 8, 6, 12, 16, 14],
      [3.75, 7.75, 5.75, 12.25, 16.25, 14.25],
      [3.1, 0, 2.8, 13, 2.4, 12.1]
    ]
  );

  createPlushie(
    'brassworks:slabfish_plushie',
    'Slabfish Plushie',
    'COLOR_GREEN',
    [
      [3, 0, 6, 13, 10, 10],
      [2, 1, 6.5, 3, 4, 9.5],
      [13, 1, 6.5, 14, 4, 9.5],
      [8, 0.043, 10.395, 8, 4.043, 14.395],
      [4.5, -0.01, 4, 7.5, 2.99, 4],
      [5.5, -0.01, 4, 6.5, -0.01, 9],
      [8.5, -0.01, 4, 11.5, 2.99, 4],
      [9.5, -0.01, 4, 10.5, -0.01, 9],
      [4.5, 0.01, 4, 7.5, 3.01, 4],
      [5.5, 0.01, 4, 6.5, 0.01, 9],
      [8.5, 0.01, 4, 11.5, 3.01, 4],
      [9.5, 0.01, 4, 10.5, 0.01, 9]
    ]
  );

})

