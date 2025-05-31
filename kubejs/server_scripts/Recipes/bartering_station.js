ServerEvents.recipes(event => {
  event.remove({ output: 'barteringstation:bartering_station' })

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
})
