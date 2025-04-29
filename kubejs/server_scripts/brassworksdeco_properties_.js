ServerEvents.tags('block', event => {
  const stones = [
    'andesite','asurine','calcite','crimsite','deepslate','diorite',
    'scoria','scorchia','ochrum','limestone','granite',
    'dripstone','tuff','veridium'
  ];
  const variants = [
    'cut_polished_connecting',
    'cut_small_brick_connecting'
  ];

  for (const stone of stones) {
    for (const variant of variants) {
      let id = `brassworks:${stone}_${variant}`;
      // makes block mineable by pickaxe
      event.add('minecraft:mineable/pickaxe', id);
      // requires at least stone-tier tool
      event.add('minecraft:needs_stone_tool', id);
    }
  }
});
