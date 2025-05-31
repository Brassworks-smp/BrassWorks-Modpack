// Script to add Create crushing recipe for rails to destroyed tracks
ServerEvents.recipes(event => {
  // Single crushing recipe for rails to destroyed tracks
  event.recipes.create.crushing([
    // Each track has 33% chance (roughly equal probability for any type)
    Item.of('brassworks:destroyedtrack_1').withChance(0.33),
    Item.of('brassworks:destroyedtrack_2').withChance(0.33),
    Item.of('brassworks:destroyedtrack_3').withChance(0.33),
    // Small chance for iron nugget as bonus
    Item.of('minecraft:iron_nugget').withChance(0.01)
  ], 'create:track').processingTime(100)
})