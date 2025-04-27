ServerEvents.recipes(event => {
  //blank tome recipe
  event.shaped(Item.of('kubejs:blank_ancient_tome', 1), [
    'GBG',
    'PSP',
    'GBG'
  ], {
    S: 'apotheosis:gem_fused_slate',
	B: 'minecraft:book',
	P: 'minecraft:paper',
	G: 'apotheosis:gem_dust'
  })
  .id('kubejs:blank_ancient_tome')
  
  //tome duplication recipe
  event.shapeless(Item.of('quark:ancient_tome', 1), [
    'quark:ancient_tome',
	'kubejs:blank_ancient_tome',
	'minecraft:feather',
	'minecraft:ink_sac',
	'minecraft:lapis_lazuli',
	'minecraft:experience_bottle'
	]
  )
  .id('kubejs:ancient_tome_duplication')
  .modifyResult((grid, item) => { return grid.find("quark:ancient_tome") })
  .keepIngredient('quark:ancient_tome')
})