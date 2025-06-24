ServerEvents.recipes(event => {
  // Create crushing recipe
  event.recipes.createCrushing([
    Item.of('brassworks:crushed_ancient_debris'),
    Item.of('brassworks:crushed_ancient_debris').withChance(0.1),
    Item.of('brassworks:hyper_experience_nugget', 2),
    Item.of('brassworks:hyper_experience_nugget').withChance(0.5)
  ], 'minecraft:ancient_debris').id('brassworks:crushing/ancient_debris')

  // Smelting recipe
  event.smelting('minecraft:netherite_scrap', 'brassworks:crushed_ancient_debris')
  .id('brassworks:blasting/crushed_ancient_debris')
})
