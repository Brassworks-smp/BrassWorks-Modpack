ServerEvents.recipes(event => {
  // Recipe Removals
  event.remove({ output: 'numismatics:bank_terminal' })
  event.remove({ output: 'supplementaries:cannon' })
  event.remove({ output: 'buzzier_bees:honey_apple' })
  event.remove({ output: 'vanillabackport:dried_ghast' })
  event.remove({ id: 'minecraft:lead' }) // Remove vanilla lead recipe

  // New shapeless Bank Terminal recipe
  event.shapeless(
    'numismatics:bank_terminal',
    [
      'numismatics:spur',
      'create:industrial_iron_block',
      'create:electron_tube'
    ]
  )

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

  // Smelt Bank Terminal into a Spur
  event.smelting(
    'numismatics:spur',          
    'numismatics:bank_terminal'  
  )
  .xp(0.1)
  .id('kubejs:smelting/bank_terminal_to_spur')
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
        'artifacts:everlasting_beef'
    ])
})

