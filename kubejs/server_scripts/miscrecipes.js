ServerEvents.recipes(event => {
  // Remove old Bank Terminal recipe
  event.remove({ output: 'numismatics:bank_terminal' })

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
        'createaddition:cake_base_baked'
    ])
})
