ServerEvents.recipes(event => {
  event.remove({output: 'supplementaries:cog_block', type: 'minecraft:crafting_shaped'})
  
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
})