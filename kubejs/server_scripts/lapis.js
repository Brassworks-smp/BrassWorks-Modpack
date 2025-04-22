ServerEvents.recipes(event => {
  event.recipes.create.filling(
    'minecraft:lapis_lazuli',
    [
      'minecraft:blue_dye',
      Fluid.of('create_enchantment_industry:experience', 20) 
    ]
  )
})
