ServerEvents.recipes(event => {
  const PAIRS = [
    ['vanillabackport:pale_oak_log',        'vanillabackport:stripped_pale_oak_log'],
    ['environmental:willow_log',            'environmental:stripped_willow_log'],
    ['environmental:pine_log',              'environmental:stripped_pine_log'],
    ['environmental:plum_log',              'environmental:stripped_plum_log'],
    ['environmental:wisteria_log',          'environmental:stripped_wisteria_log'],
    ['quark:ancient_log',                   'quark:stripped_ancient_log'],
    ['quark:azalea_log',                    'quark:stripped_azalea_log'],
    ['quark:blossom_log',                   'quark:stripped_blossom_log'],
    ['snifferplus:stone_pine_log',          'snifferplus:stripped_stone_pine_log'],
    ['vanillabackport:pale_oak_wood',       'vanillabackport:stripped_pale_oak_wood'],
    ['environmental:willow_wood',           'environmental:stripped_willow_wood'],
    ['environmental:pine_wood',             'environmental:stripped_pine_wood'],
    ['environmental:plum_wood',             'environmental:stripped_plum_wood'],
    ['environmental:wisteria_wood',         'environmental:stripped_wisteria_wood'],
    ['quark:ancient_wood',                  'quark:stripped_ancient_wood'],
    ['quark:azalea_wood',                   'quark:stripped_azalea_wood'],
    ['quark:blossom_wood',                  'quark:stripped_blossom_wood'],
    ['snifferplus:stone_pine_wood',         'snifferplus:stripped_stone_pine_wood'],
  ];

  PAIRS.forEach(([input, output], index) => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [{ item: input }],
      result: [
        { item: output },
        { item: 'farmersdelight:tree_bark' }
      ],
      sound: 'minecraft:item.axe.strip',
      tool: {
        type: 'farmersdelight:tool_action',
        action: 'axe_strip'
      }
    }).id(`kubejs:cutting/strip_${index}`);
  });
});
