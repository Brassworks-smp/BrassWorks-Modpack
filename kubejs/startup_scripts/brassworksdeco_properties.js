// @script-type STARTUP

// Copy Create:veridium properties (hardness, blast resistance, sound, tool requirement)
BlockEvents.modification(event => {
  const stones = [
    'andesite','asurine','calcite','crimsite','deepslate','diorite',
    'scoria','scorchia','ochrum','limestone','granite',
    'dripstone','tuff','veridium'
  ];
  const variants = [
    'cut_polished_connecting',
    'cut_small_brick_connecting'
  ];

  // Base values from Create:veridium
  const base = {
    soundType: 'stone',          // stone sounds citeturn1search0
    destroySpeed: 1.25,          // hardness 1.25 citeturn0search1
    explosionResistance: 6,      // blast resistance 6 citeturn0search1
    requiresTool: true           // requires pickaxe/tool
  };

  for (const stone of stones) {
    for (const variant of variants) {
      let id = `brassworks:${stone}_${variant}`;
      event.modify(id, block => {
        block.soundType = base.soundType;
        block.destroySpeed = base.destroySpeed;
        block.explosionResistance = base.explosionResistance;
        block.requiresTool = base.requiresTool;
      });
    }
  }
});