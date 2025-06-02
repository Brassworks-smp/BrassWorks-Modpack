StartupEvents.registry('block', event => {
  const destroyedTracks = [
    { id: 'brassworks:destroyedtrack_1', name: 'Destroyed Track Type 1' },
    { id: 'brassworks:destroyedtrack_2', name: 'Destroyed Track Type 2' },
    { id: 'brassworks:destroyedtrack_3', name: 'Destroyed Track Type 3' }
  ];

  destroyedTracks.forEach(track => {
    event.create(track.id, 'cardinal')
      .material('metal')
      .soundType('metal')
      .hardness(2.0)
      .resistance(6.0)
      .transparent(true)
      .renderType('cutout')
      .fullBlock(false)
      .requiresTool(true)
      .tagBlock('minecraft:mineable/pickaxe')
      .mapColor('COLOR_GRAY')
      .displayName(track.name)
      .box(0.01, 0, 0.01, 15.99, 4, 15.99, true);
  });
});