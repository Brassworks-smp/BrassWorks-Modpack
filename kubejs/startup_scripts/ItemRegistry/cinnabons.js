StartupEvents.registry('item', event => {
  const rolls = [
    ['honey_roll', 'Honey Roll'],
    ['xp_roll', 'Experience Roll'],
    ['hyper_xp_roll', 'Hyper Experience Roll'],
    ['choco_roll', 'Chocolate Roll'],
    ['lumisene_roll', 'Lumisene Roll', 'minecraft:glowing', 200, 0, 1]
  ];

  rolls.forEach(r => {
    let item = event.create(`brassworks:${r[0]}`)
      .food(f => {
        f.hunger(8).saturation(0.35);
        if (r.length > 2) f.effect(r[2], r[3], r[4], r[5]);
      })
      .texture(`brassworks:item/rolls/${r[0]}`)
      .displayName(r[1]);
  });
});
