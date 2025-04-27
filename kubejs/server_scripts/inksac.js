// Ink Sac from Water, Dried Kelp and Coal (Compacting Recipe)
ServerEvents.recipes(event => {
  event.recipes.createCompacting(
    Item.of('minecraft:ink_sac', 2),
    [
      Fluid.of('minecraft:water', 500),
      'minecraft:dried_kelp',
      '#c:coal'
    ]
  )
})

// Ink Sac from Dried Kelp and Ink (Filling Recipe)
ServerEvents.recipes(event => {
  event.recipes.createFilling(
    Item.of('minecraft:ink_sac', 2),
    [
      'minecraft:dried_kelp',
      Fluid.of('create_enchantment_industry:ink', 500)
    ]
  )
})