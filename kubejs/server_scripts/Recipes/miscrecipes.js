ServerEvents.recipes(event => {
  // Recipe Removals
  event.remove({ output: 'numismatics:bank_terminal' })
  event.remove({ output: 'supplementaries:cannon' })
  event.remove({ output: 'buzzier_bees:honey_apple' })
  event.remove({ output: 'barteringstation:bartering_station' })
  event.remove({ output: 'vanillabackport:dried_ghast' })
  event.remove({ id: 'minecraft:lead' }) // Remove vanilla lead recipe
  event.remove({ output: 'missions:mechanical_exchanger' }) // Remove any existing recipe for mechanical exchanger
  event.remove({ output: 'missions:jar_of_tips' }) // Remove any existing recipe for jar of tips
  event.remove({ output: 'createqol:inventory_linker' }) 
  event.remove({ output: 'createqol:player_paper' })
  event.remove({ output: 'supplementaries:cog_block' }) 
  event.remove({ mod: 'createaddition' });
  
  // New shapeless Bank Terminal recipe
  event.shapeless(
    'numismatics:bank_terminal',
    [
      'numismatics:spur',
      'create:industrial_iron_block',
      'create:electron_tube'
    ]
  )
  // Jar of Tips Recipe
  event.shapeless(
    'missions:jar_of_tips',
    [
      'supplementaries:jar',
      'numismatics:spur'
    ]
  )

  // Add a Create spouting recipe to craft Artifacts' Night Vision Goggles
  event.recipes.createFilling(
    'artifacts:night_vision_goggles',
    [
      'create:goggles',
      Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:night_vision"})
    ]
  );

// Ink Sac from Water, Dried Kelp and Coal (Compacting Recipe)
  event.recipes.createCompacting(
    Item.of('minecraft:ink_sac', 2),
    [
      Fluid.of('minecraft:water', 500),
      'minecraft:dried_kelp',
      '#c:coal'
    ]
  )

// Ink Sac from Dried Kelp and Ink (Filling Recipe)
  event.recipes.createFilling(
    Item.of('minecraft:ink_sac', 2),
    [
      'minecraft:dried_kelp',
      Fluid.of('create_enchantment_industry:ink', 500)
    ]
  )


  // Add a Create spouting recipe to craft Artifacts' Night Vision Goggles with Refined Radiance
    event.recipes.create.filling(
    'minecraft:lapis_lazuli',
    [
      'minecraft:blue_dye',
      Fluid.of('create_enchantment_industry:experience', 20) 
    ]
  )

  //mechanical exchanger recycling recipe
  event.smelting(
    'numismatics:spur',          
    'missions:mechanical_exchanger'  
  )
  .xp(0.1)
  .id('kubejs:smelting/mechanical_exchanger_to_spur')

  //cogblock
  event.shaped(Item.of('supplementaries:cog_block', 8), [
    'RCR',
    'CAC',
    'RCR'
  ], {
    A: 'create:andesite_casing',
    C: 'create:cogwheel',
    R: 'minecraft:redstone'
  })
  .id('kubejs:cog_block')

  // Mechanical Exchanger Recipe
  event.shaped('missions:mechanical_exchanger', [
    ' B ',
    ' E ',
    ' S '
  ], {
    E: 'create:electron_tube',
    S: 'numismatics:spur',
    B: 'create:brass_casing'
  })

  //pathfinders quill duplicate recipe
  event.recipes.shaped("quark:pathfinders_quill", [
    " I ",
    "FQF",
    " F "
  ], {
    Q: "quark:pathfinders_quill",
    F: "feather",
    I: "ink_sac"
  })
  .id('kubejs:pathfinders_quill_dupe_manual_only')
  .modifyResult((grid, item) => grid.find("quark:pathfinders_quill"))
  .keepIngredient("quark:pathfinders_quill");


  // Limestone + Quartz → Calcite
  event.shapeless(
    'minecraft:calcite',
    [
      'create:limestone',
      'minecraft:quartz'
    ]
  )

  // 2 Short Grass → Tall Grass
  event.shapeless(
    'minecraft:tall_grass',
    [
      '2x minecraft:grass' // short grass is just 'minecraft:grass'
    ]
  )

  // Fern Recipe (seeds + short grass)
  event.shapeless(
    'minecraft:fern',
    [
      '#forge:seeds',
      'minecraft:grass'
    ]
  )

  //bartering station recipe
  event.shaped('barteringstation:bartering_station', [
    'GEG',
    'CSC',
    'CDC'
  ], {
    G: 'create:electron_tube',
    E: 'minecraft:gold_ingot',
    C: 'minecraft:crimson_planks',
    S: 'create_sa:copper_magnet',
    D: 'create:depot'
  }).id('kubejs:barteringstation/create_style_recipe')


  // Large Fern Recipe (2 ferns)
  event.shapeless(
    'minecraft:large_fern',
    [
      '2x minecraft:fern'
    ]
  )

  // Small Dripleaf Recipe (Create compacting)
  event.recipes.create.compacting(
    'minecraft:small_dripleaf',
    [
      'minecraft:clay_ball',
      '#minecraft:leaves',
      Fluid.of('minecraft:water', 100)
    ]
  )

  // Big Dripleaf Recipe (Create compacting)
  event.recipes.create.compacting(
    'minecraft:big_dripleaf',
    [
      'minecraft:small_dripleaf',
      '#minecraft:leaves',
      'minecraft:bone_meal',
      Fluid.of('minecraft:water', 250)
    ]
  )

  event.recipes.create.mechanical_crafting(
    'create_sa:andesite_exoskeleton_chestplate',
    [
      '01210',
      '00300',
      '54045'
    ],
    {
      '0': 'create:andesite_alloy',
      '1': 'create:shaft',
      '2': 'create:belt_connector',
      '3': 'create_sa:heat_engine',
      '4': 'create:zinc_ingot',
      '5': '#c:stones'
    }
  )

  // Environmental: Mycelium Sprouts (Create mixing)
  event.recipes.create.mixing(
    '2x environmental:mycelium_sprouts',
    [
      'minecraft:mycelium',
      'minecraft:brown_mushroom',
      Fluid.of('minecraft:water', 100)
    ]
  )
  
  // Environmental: Giant Tall Grass (Create compacting)
  event.recipes.create.compacting(
    'environmental:giant_tall_grass',
    [
      '4x minecraft:tall_grass',
      'minecraft:bone_meal',
      Fluid.of('minecraft:water', 200)
    ]
  )
  
  // Environmental: Cup Lichen (Create mixing)
  event.recipes.create.mixing(
    '2x environmental:cup_lichen',
    [
      'minecraft:moss_block',
      'minecraft:bone_meal',
      'minecraft:blue_dye',
      Fluid.of('minecraft:water', 100)
    ]
  )
  
  // Environmental: Cattail Fluff (Create milling)
  event.recipes.create.milling(
    '2x environmental:cattail_fluff',
    'environmental:cattail',
  )
  
  // Environmental: Large Lily Pad (Create compacting)
  event.recipes.create.compacting(
    'environmental:large_lily_pad',
    [
      '2x minecraft:lily_pad',
      'minecraft:slime_ball'
    ]
  )
  
  event.recipes.create.crushing([
    // Each track has 33% chance (roughly equal probability for any type)
    Item.of('brassworks:destroyedtrack_1').withChance(0.33),
    Item.of('brassworks:destroyedtrack_2').withChance(0.33),
    Item.of('brassworks:destroyedtrack_3').withChance(0.33),
    // Small chance for iron nugget as bonus
    Item.of('minecraft:iron_nugget').withChance(0.01)
  ], 'create:track').processingTime(100)

  // Dirt + Water → Mud Balls (Create compacting)
  event.recipes.create.compacting(
    '4x environmental:mud_ball',
    [
      'minecraft:dirt',
      Fluid.of('minecraft:water', 250)
    ]
  )
  .id('kubejs:dirt_to_mud_balls')
  
  // Porkchop + Ash → Soap (Create compacting)
  event.recipes.create.compacting(
    '6x supplementaries:soap',
    [
      'minecraft:porkchop',
      '4x supplementaries:ash',
      Fluid.of('minecraft:water', 1000)
    ]
  )
  .id('kubejs:porkchop_ash_to_soap')
  
  // Environmental: Giant Lily Pad (Create compacting)
  event.recipes.create.compacting(
    'environmental:giant_lily_pad',
    [
      '2x environmental:large_lily_pad',
      'minecraft:bone_meal',
      Fluid.of('minecraft:water', 250)
    ]
  )
  
  // Environmental: Duckweed (Create mixing)
  event.recipes.create.mixing(
    '3x environmental:duckweed',
    [
      'minecraft:lily_pad',
      'minecraft:moss_block',
      '#minecraft:leaves',
      Fluid.of('minecraft:water', 300)
    ]
  )
  
  // Quark: Chorus Weeds (Create mixing)
  event.recipes.create.mixing(
    '2x quark:chorus_weeds',
    [
      'minecraft:chorus_flower',
      'minecraft:grass',
      Fluid.of('minecraft:water', 100)
    ]
  )
  
  // Quark: Chorus Twist (Create mixing)
  event.recipes.create.mixing(
    '2x quark:chorus_twist',
    [
      'minecraft:chorus_plant',
      'minecraft:vine',
      Fluid.of('minecraft:water', 100)
    ]
  )
  
  // Minecraft: Pointed Dripstone (Create crushing)
  event.recipes.create.crushing([
    '2x minecraft:pointed_dripstone',
    Item.of('minecraft:pointed_dripstone').withChance(0.5)
  ], 'minecraft:dripstone_block')
  
  // Alternative Pointed Dripstone (Create mixing)
  event.recipes.create.mixing(
    'minecraft:pointed_dripstone',
    [
      'minecraft:clay_ball',
      'create:limestone',
      Fluid.of('minecraft:water', 50)
    ]
  )

  // Lily Pad Recipe (Create mixing)
  event.recipes.create.mixing(
    '2x minecraft:lily_pad',
    [
      '#minecraft:leaves',
      'minecraft:moss_block',
      Fluid.of('minecraft:water', 250)
    ]
  )

  // Vines Recipe (Create mixing)
  event.recipes.create.mixing(
    '2x minecraft:vine',
    [
      'minecraft:moss_block',
      '#minecraft:leaves',
      Fluid.of('minecraft:water', 100)
    ]
  )

  // Seagrass Recipe (Create mixing)
  event.recipes.create.mixing(
    '2x minecraft:seagrass',
    [
      'minecraft:grass',
      'minecraft:kelp',
      Fluid.of('minecraft:water', 300)
    ]
  )


  // Rooted Dirt Recipe (Create compacting)
  event.recipes.create.compacting(
    'minecraft:rooted_dirt',
    [
      'minecraft:dirt',
      'minecraft:grass_block',
      'minecraft:bone_meal'
    ]
  )

  // Glow Lichen Recipe (Create mixing)
  event.recipes.create.mixing(
    '2x minecraft:glow_lichen',
    [
      'minecraft:vine',
      'minecraft:glow_ink_sac',
      Fluid.of('minecraft:water', 100)
    ]
  )

  // backport of new lead recipe from 1.21.6 
  event.shaped('2x minecraft:lead', [
    'SS ',
    'SS ',
    '  S'
  ], {
    S: 'minecraft:string'
  })

  // backport of dried ghast recipe from 1.21.6
  event.shaped('vanillabackport:dried_ghast', [
    'TTT',
    'TST',
    'TTT'
  ], {
    T: 'minecraft:ghast_tear',
    S: 'minecraft:soul_sand'
  })

  
  // Fiddle Ferns: 2 short → 1 tall (shaped)
  event.shaped(
    'snifferplus:tall_fiddlefern',
    [
      'F',
      'F'
    ],
    {
      F: 'snifferplus:fiddlefern'
    }
  ).id('kubejs:fiddlefern_to_tall_fiddlefern')

  // Fiddle Ferns: Tall → 2 short (Create crushing)
  event.recipes.create.crushing([
    Item.of('snifferplus:fiddlefern', 2),
    Item.of('snifferplus:fiddlefern').withChance(0.25)
  ], 'snifferplus:tall_fiddlefern').id('kubejs:crushing_tall_fiddlefern')

  // whoopee cushion
  event.shaped('artifacts:whoopee_cushion', [
    ' L ',
    'DML',
    'SD '
  ], {
    L: 'minecraft:leather',
    D: 'minecraft:magenta_dye',
    M: 'environmental:mud_ball',
    S: 'minecraft:slime_ball'
  })

// heave ho music disc
  event.shaped('supplementaries:music_disc_heave_ho', [
    'PPP',
    'PMP',
    'PPP'
  ], {
    P: '#minecraft:planks',
    M: '#minecraft:music_discs'
  })


  //saddle recipe from 1.21.6
    event.shaped('minecraft:saddle', [
    ' L ',
    'LIL'
  ], {
    L: 'leather',
    I: 'iron_ingot'
  })

  // Sniffer Wool Recipe
  event.shaped('brassworks:sniffer_wool', [
    'RR',
    'RR'
  ], {
    R: 'brassworks:sniffer_fur'
  })

  // Sniffer Carpet Recipe
  event.shaped('3x brassworks:sniffer_carpet', [
    'RR'
  ], {
    R: 'brassworks:sniffer_wool'
  })

  // Smelt Bank Terminal into a Spur
  event.smelting(
    'numismatics:spur',          
    'numismatics:bank_terminal'  
  )
  .xp(0.1)
  .id('kubejs:smelting/bank_terminal_to_spur')

  // Whitened Pulp Recipe (Create mixing)
  event.recipes.create.mixing(
    '3x brassworks:whitened_pulp',
    [
      'create:pulp',
      '2x minecraft:bone_meal'
    ]
  )
  .id('kubejs:whitened_pulp')
  
  // Convert Whitened Pulp to Paper (Create pressing)
  event.recipes.create.pressing(
    'minecraft:paper',
    'brassworks:whitened_pulp'
  )
  .id('kubejs:whitened_pulp_to_paper')

  // Create Limestone to Quark Limestone via Spout
  event.recipes.create.filling(
    '1x quark:limestone',
    [
      '1x create:limestone',
      Fluid.of('minecraft:water', 100)
    ]
  )
  .id('kubejs:create_limestone_to_quark_limestone')

  //direct chute recipe
  event.recipes.create.filling(
    'direct_chute:direct_chute',
    [
      'create:chute',
      Fluid.of('minecraft:lava', 250)
    ]
  )

  // Create Crimsite to Quark Jasper via Spout
  event.recipes.create.filling(
    '1x quark:jasper',
    [
      '1x create:crimsite',
      Fluid.of('minecraft:water', 100)
    ]
  )
  .id('kubejs:create_crimsite_to_quark_jasper')

  // Create Asurine to Quark Shale via Spout
  event.recipes.create.filling(
    '1x quark:shale',
    [
      '1x create:asurine',
      Fluid.of('minecraft:water', 100)
    ]
  )
  .id('kubejs:create_asurine_to_quark_shale')

  // Create Veridium and Crimsite to Quark Myalite via Mixing
  event.recipes.create.mixing(
    '2x quark:myalite',
    [
      '1x create:veridium',
      '1x create:crimsite'
    ]
  )
  .id('kubejs:create_veridium_crimsite_to_quark_myalite')

  // Bundle recipe: top two corners are string, all other edges are leather
  event.shaped('minecraft:bundle', [
    'SLS',
    'L L',
    'LLL'
  ], {
    S: 'minecraft:string',
    L: 'minecraft:leather'
  }).id('kubejs:bundle_leather_string')

  // Quark Limestone to Create Limestone via Emptying (draining water)
  event.recipes.create.emptying([
    '1x create:limestone',
    Fluid.of('minecraft:water', 100)
  ], 'quark:limestone')
  .id('kubejs:quark_limestone_to_create_limestone')

  // Quark Jasper to Create Crimsite via Emptying (draining water)
  event.recipes.create.emptying([
    '1x create:crimsite',
    Fluid.of('minecraft:water', 100)
  ], 'quark:jasper')
  .id('kubejs:quark_jasper_to_create_crimsite')

  // Quark Shale to Create Asurine via Emptying (draining water)
  event.recipes.create.emptying([
    '1x create:asurine',
    Fluid.of('minecraft:water', 100)
  ], 'quark:shale')
  .id('kubejs:quark_shale_to_create_asurine')

  // Remove pressing recipes for createdeco coins and add crafting recipes using arrays
  const coinTypes = [
    {coin: 'createdeco:netherite_coin', nugget: 'createdeco:netherite_nugget'},
    {coin: 'createdeco:iron_coin', nugget: 'minecraft:iron_nugget'},
    {coin: 'createdeco:brass_coin', nugget: 'create:brass_nugget'},
    {coin: 'createdeco:copper_coin', nugget: 'create:copper_nugget'},
    {coin: 'createdeco:industrial_iron_coin', nugget: 'createdeco:industrial_iron_nugget'},
    {coin: 'createdeco:zinc_coin', nugget: 'create:zinc_nugget'},
    {coin: 'createdeco:gold_coin', nugget: 'minecraft:gold_nugget'}
  ]

  // Remove all coin pressing recipes and add shapeless recipes
  coinTypes.forEach(coinData => {
    // Remove pressing recipe
    event.remove({type: 'create:pressing', output: coinData.coin})
    
    // Add shapeless recipe using corresponding nugget
    event.shapeless(coinData.coin, [coinData.nugget])
      .id(`kubejs:coins/${coinData.coin.split(':')[1]}_from_nugget`)
  })

  // Remove sawmill:woodcutting recipes for specific items using the correct schema key
  const woodcuttingRemovals = [
    'supplementaries:timber_frame',
    'supplementaries:timber_brace',
    'supplementaries:timber_cross_brace',
    'supplementaries:item_shelf'
  ];

  woodcuttingRemovals.forEach(item => {
    event.remove({ type: 'sawmill:woodcutting', result: item });
  });
})

// Hide specific CreateAddition items from creative/JEI
ServerEvents.tags('item', event => {
    event.add('forge:hidden', [
        'create_sa:grapplin_whisk',
        'createaddition:digital_adapter',
        'createaddition:cake_base',
        'supplementaries:cannon',
        'createaddition:cake_base_baked',
        'buzzier_bees:honey_apple',
        'artifacts:eternal_steak',
        'artifacts:everlasting_beef',
        'createadvlogistics:redstone_radio',
        'createqol:player_paper',
        'createqol:inventory_linker',
        'quark:ancient_tome',
        'woodworks:warped_boards',
        'woodworks:crimson_boards',
        'woodworks:cherry_boards',
        'woodworks:mangrove_boards',
        'woodworks:dark_oak_boards',
        'woodworks:acacia_boards',
        'woodworks:jungle_boards',
        'woodworks:birch_boards',
        'woodworks:spruce_boards',
        'woodworks:oak_boards',
        'woodworks:sawmill'
    ])

    // Create the alexcavesradon tag and add all the framed radon lamp items
    event.add('kubejs:alexcavesradon', [
        'createframed:framed_radon_lamp_red',
        'createframed:framed_radon_lamp_orange',
        'createframed:framed_radon_lamp_yellow',
        'createframed:framed_radon_lamp_green',
        'createframed:framed_radon_lamp_lime',
        'createframed:framed_radon_lamp_blue',
        'createframed:framed_radon_lamp_light_blue',
        'createframed:framed_radon_lamp_cyan',
        'createframed:framed_radon_lamp_purple',
        'createframed:framed_radon_lamp_magenta',
        'createframed:framed_radon_lamp_pink',
        'createframed:framed_radon_lamp_black',
        'createframed:framed_radon_lamp_gray',
        'createframed:framed_radon_lamp_light_gray',
        'createframed:framed_radon_lamp_white',
        'createframed:framed_radon_lamp_brown'
    ])
    
    event.add('kubejs:shadow_radiance', [
      'createqol:shadow_radiance_boots',
      'createqol:shadow_radiance_leggings',
      'createqol:shadow_radiance',
      'createqol:shadow_radiance_helmet',
      'createqol:shadow_radiance_chestplate'
    ])

    event.add('kubejs:disabledjetpacks', [
      'create_sa:brass_jetpack_chestplate',
      'create_sa:andesite_jetpack_chestplate',
      'create_sa:netherite_jetpack_chestplate'
    ])

    event.add('kubejs:grieferarmor', [
      'savage_and_ravage:griefer_helmet',
      'savage_and_ravage:griefer_chestplate',
      'savage_and_ravage:griefer_leggings',
      'savage_and_ravage:griefer_boots'
    ])
      
    event.add('kubejs:createconnctedcopycats', [
        'create_connected:copycat_block',
        'create_connected:copycat_slab',
        'create_connected:copycat_beam',
        'create_connected:copycat_vertical_step',
        'create_connected:copycat_stairs',
        'create_connected:copycat_fence',
        'create_connected:copycat_fence_gate',
        'create_connected:copycat_wall',
        'create_connected:copycat_board',
        'create_connected:copycat_box',
        'create_connected:copycat_catwalk'
    ])

    event.add('minecraft:tall_flowers', [
      'snifferplus:tall_fiddlefern'
    ])

    event.add('minecraft:small_flowers', [
      'snifferplus:fiddlefern'
    ])

    event.add('brassworks:blocked_enchantment_machines', [
      'create:encased_fan',
      'create:crushing_wheel',
      'create:millstone',
      'create:mechanical_press',
      'create:mechanical_mixer',
      'create:mechanical_harvester',
      'create:mechanical_plough',
      'create:mechanical_roller',
      'create:mechanical_saw',
      'create:spout'
    ])

    event.add('kubejs:dirt', [
      'minecraft:dirt',
      'minecraft:coarse_dirt',
      'minecraft:rooted_dirt'
    ])

    event.add('salt:can_be_salted', [
      'moredelight:toast_with_chocolate',
      'moredelight:toast_with_glow_berries',
      'moredelight:toast_with_sweet_berries',
      'moredelight:toast_with_honey',
      'moredelight:toast_with_egg',
      'moredelight:toast',
      'moredelight:bread_slice',
      'moredelight:diced_potatoes_with_egg_and_tomato',
      'moredelight:potato_salad',
      'moredelight:chicken_salad',
      'moredelight:carrot_soup',
      'moredelight:simple_hamburger',
      'moredelight:hamburger_with_egg',
      'moredelight:loaded_hamburger',
      'moredelight:chicken_sandwich_with_egg_and_tomato',
      'moredelight:steak_sandwich',
      'moredelight:porkchop_sandwich',
      'moredelight:egg_with_bacon_sandwich',
      'moredelight:tomato_sandwich',
      'moredelight:diced_potatoes_with_porkchop',
      'moredelight:diced_potatoes_with_beef',
      'moredelight:diced_potatoes_with_chicken_cuts',
      'moredelight:mashed_potatoes',
      'moredelight:creamy_pasta_with_chicken_cuts',
      'moredelight:creamy_pasta_with_ham',
      'moredelight:cooked_rice_with_porkchop',
      'moredelight:cooked_rice_with_beef',
      'moredelight:cooked_rice_with_chicken_cuts',
      'moredelight:omelette',
      'moredelight:chocolate_popsicle',
      'moredelight:diced_potatoes',
      'sniffers_delight:sniffer_egg_soup',
      'sniffers_delight:stuffed_sniffer_egg',
      'sniffers_delight:torchflower_pistill',
      'sniffers_delight:glazed_torchflower',
      'sniffers_delight:sniffer_steak_and_carrots',
      'sniffers_delight:pitcher_plant_soup',
      'sniffers_delight:moss_salad',
      'sniffers_delight:torchflower_salad',
      'sniffers_delight:glazed_pitcher_pod',
      'sniffers_delight:boiled_sniffer_egg',
      'sniffers_delight:cooked_sniffer_steak',
      'sniffers_delight:raw_sniffer_steak'
    ])

    //tag for all copycats
    event.add('kubejs:copycats', [
      'copycats:copycat_block',
      'copycats:copycat_slab',
      'copycats:copycat_stairs',
      'copycats:copycat_vertical_stairs',
      'copycats:copycat_fence',
      'copycats:copycat_wall',
      'copycats:copycat_vertical_step',
      'copycats:copycat_beam',
      'copycats:copycat_slice',
      'copycats:copycat_vertical_slice',
      'copycats:copycat_corner_slice',
      'copycats:copycat_ghost_block',
      'copycats:copycat_layer',
      'copycats:copycat_half_panel',
      'copycats:copycat_pane',
      'copycats:copycat_flat_pane',
      'copycats:copycat_byte',
      'copycats:copycat_byte_panel',
      'copycats:copycat_board',
      'copycats:copycat_catwalk',
      'copycats:copycat_box',
      'copycats:copycat_half_layer',
      'copycats:copycat_vertical_half_layer',
      'copycats:copycat_stacked_half_layer',
      'copycats:copycat_stone_button',
      'copycats:copycat_wooden_button',
      'copycats:copycat_fence_gate',
      'copycats:copycat_iron_trapdoor',
      'copycats:copycat_trapdoor',
      'copycats:copycat_folding_door',
      'copycats:copycat_sliding_door',
      'copycats:copycat_iron_door',
      'copycats:copycat_door',
      'copycats:copycat_slope_layer',
      'copycats:copycat_vertical_slope',
      'copycats:copycat_slope',
      'copycats:copycat_wooden_pressure_plate',
      'copycats:copycat_stone_pressure_plate',
      'copycats:copycat_light_weighted_pressure_plate',
      'copycats:copycat_heavy_weighted_pressure_plate',
      'copycats:copycat_ladder',
      'copycats:copycat_fluid_pipe',
      'copycats:copycat_shaft',
      'copycats:copycat_cogwheel',
      'copycats:copycat_large_cogwheel',
      'create:copycat_step',
      'create:copycat_panel',
    ])
    
    event.add('kubejs:decorative_glass_blocks', [
      '#createframed:stained_framed_glass',
      '#createframed:stained_tiled_glass',
      '#createframed:vertical_stained_framed_glass',
      '#createframed:horizontal_stained_framed_glass',
      'create:tiled_glass',
      'create:framed_glass',
      'create:horizontal_framed_glass',
      'create:vertical_framed_glass'
    ])

    event.add('brassworks:experience_heap_hyper', [
      'brassworks:hyper_experience_heap'
    ])
    // Add all items from alexcavesradon and copycats from CC tags to forge:hidden tag
    event.add('forge:hidden', '#kubejs:alexcavesradon')
    event.add('forge:hidden', '#kubejs:createconnctedcopycats')
    event.add('forge:hidden', '#kubejs:shadow_radiance')
    event.add('forge:hidden', '#kubejs:disabledjetpacks')
    event.add('forge:hidden', '#kubejs:grieferarmor')
    event.add('curios:head', '#trinkets:head/hat')
    event.add('curios:belt', 'create_mobile_packages:portable_stock_ticker')

    event.add('kubejs:packagers', [
      'create:packager',
      'create:repackager',
      'create_factory_logistics:jar_packager',
      'delivery_director:package_rewriter'
    ])
})

ServerEvents.tags('block', event => {
  event.add('brassworks:tall_flowers', [
    'snifferplus:tall_fiddlefern'
  ])
  event.add('brassworks:small_flowers', [
    'snifferplus:fiddlefern'
  ])
})


ServerEvents.recipes(event => {
  // Remove all recipes for items in the forge:hidden tag
  event.remove({ input: '#forge:hidden' })
  event.remove({ output: '#forge:hidden' })

  // Remove all woodworks:sawing recipes
  event.remove({ type: 'woodworks:sawing' })
})
