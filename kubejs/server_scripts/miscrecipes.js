ServerEvents.recipes(event => {
  // Recipe Removals
  event.remove({ output: 'numismatics:bank_terminal' })
  event.remove({ output: 'supplementaries:cannon' })
  event.remove({ output: 'buzzier_bees:honey_apple' })
  event.remove({ output: 'vanillabackport:dried_ghast' })
  event.remove({ output: 'createadvlogistics:redstone_radio' })
  event.remove({ output: 'createadvlogistics:package_wormhole' })
  event.remove({ id: 'minecraft:lead' }) // Remove vanilla lead recipe
  event.remove({ output: 'missions:mechanical_exchanger' }) // Remove any existing recipe for mechanical exchanger
  event.remove({ output: 'missions:jar_of_tips' }) // Remove any existing recipe for jar of tips
  event.remove({ output: 'createqol:inventory_linker' }) 
  event.remove({ output: 'createqol:player_paper' })
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


  // package wormhole recipe
  event.shaped('createadvlogistics:package_wormhole', [
    'CNC',
    'EPE',
    'MNM'
  ], {
    C: 'minecraft:chorus_fruit',
    E: 'ender_pearl',
    N: 'minecraft:netherite_ingot',
    M: 'create:precision_mechanism',
    P: '#kubejs:packagers' // Use the tag instead of specific item
  })

  //mechanical exchanger recycling recipe
  event.smelting(
    'numismatics:spur',          
    'missions:mechanical_exchanger'  
  )
  .xp(0.1)
  .id('kubejs:smelting/mechanical_exchanger_to_spur')

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

  // Spore Blossom Recipe (Create mixing)
  event.recipes.create.mixing(
    'minecraft:spore_blossom',
    [
      'minecraft:flowering_azalea',
      'minecraft:pink_petals',
      'minecraft:glow_berries',
      Fluid.of('minecraft:water', 200)
    ]
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

  // Sniffer Egg Recipe
  event.shaped('minecraft:sniffer_egg', [
    'NMN',
    'MEM',
    'NMN'
  ], {
    N: 'minecraft:nether_wart_block',
    M: 'minecraft:moss_block',
    E: '#forge:eggs'
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
})

// Hide specific CreateAddition items from creative/JEI
ServerEvents.tags('item', event => {
    event.add('forge:hidden', [
        'createaddition:digital_adapter',
        'createaddition:cake_base',
        'supplementaries:cannon',
        'createaddition:cake_base_baked',
        'buzzier_bees:honey_apple',
        'artifacts:eternal_steak',
        'artifacts:everlasting_beef',
        'createadvlogistics:redstone_radio',
        'createqol:player_paper',
        'createqol:inventory_linker'
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
    
    // Add all items from alexcavesradon tag to forge:hidden tag
    event.add('forge:hidden', '#kubejs:alexcavesradon')

    // Create a new tag for packagers
    event.add('kubejs:packagers', [
      'create:packager',
      'create:repackager'
    ])
})
