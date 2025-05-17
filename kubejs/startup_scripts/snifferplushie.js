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
      [4, 0, 5, 12, 3, 11],
      [10, 0, 11, 13, 0, 15],
      [4, 0, 11, 7, 0, 15],
      [10, 0, 1, 13, 0, 5],
      [4, 0, 1, 7, 0, 5],
      [0, 0, 8, 4, 4, 8],
      [4, 3, 8, 12, 4, 8],
      [12, 0, 5, 16, 4, 11],
      [12, 4, 5, 12, 6, 11],
      [12, 0, 3, 12, 6, 5],
      [12, 0, 11, 12, 6, 13]
    ]
  );

  createPlushie(
    'brassworks:pink_axolotl_plushie',
    'Pink Axolotl Plushie',
    'COLOR_PINK',
    [
      [4, 0, 5, 12, 3, 11],
      [10, 0, 11, 13, 0, 15],
      [4, 0, 11, 7, 0, 15],
      [10, 0, 1, 13, 0, 5],
      [4, 0, 1, 7, 0, 5],
      [0, 0, 8, 4, 4, 8],
      [4, 3, 8, 12, 4, 8],
      [12, 0, 5, 16, 4, 11],
      [12, 4, 5, 12, 6, 11],
      [12, 0, 3, 12, 6, 5],
      [12, 0, 11, 12, 6, 13]
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
      [1, 0, 7.5, 6, 1, 8.5], // Element 6 from JSON
      [10, 0, 7.5, 15, 1, 8.5], // Element 7 from JSON
      [10, 0, 7.5, 15, 1, 8.5], // Element 8 from JSON
      [7.5, 0, 1, 8.5, 1, 6]  // Element 9 from JSON
    ]
  );

  
})

