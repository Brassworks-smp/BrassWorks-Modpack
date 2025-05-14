// Direct Chute Recipes for "direct_chute:direct_chute" item

ServerEvents.recipes(event => {
  // 6. Filling Recipe (adding fluid to enhance properties)
  event.recipes.create.filling(
    'direct_chute:direct_chute',
    [
      'create:chute',
      Fluid.of('minecraft:lava', 250)
    ]
  )
  
})