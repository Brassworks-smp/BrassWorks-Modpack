ServerEvents.recipes(event => {
const heap = 'brassworks:hyper_experience_heap'
  const handle = 'create_sa:zinc_handle'

  event.shaped('brassworks:hyper_experience_sword', [
    'a',
    'a',
    'b'
  ], {
    a: heap,
    b: handle
  })

  event.shaped('brassworks:hyper_experience_shovel', [
    'a',
    'b',
    'b'
  ], {
    a: heap,
    b: handle
  })

  event.shaped('brassworks:hyper_experience_pickaxe', [
    'aaa',
    ' b ',
    ' b '
  ], {
    a: heap,
    b: handle
  })

  event.shaped('brassworks:hyper_experience_axe', [
    'aa',
    'ab',
    ' b'
  ], {
    a: heap,
    b: handle
  })


  event.shaped('brassworks:hyper_experience_heap', [
    'aa',
    'aa'
  ], {
    a: 'brassworks:hyper_experience_nugget'
  })


  event.recipes.create.compacting(
    '4x create:experience_nugget',
    Fluid.of('create_enchantment_industry:experience', 12)
    )
    .id('kubejs:create_experience_nugget_from_compacting')


  event.recipes.create.compacting(
  '4x brassworks:hyper_experience_nugget',
  Fluid.of('create_enchantment_industry:hyper_experience', 12)
  )
  .id('kubejs:brassworks_hyper_experience_nugget_from_compacting')


  event.recipes.create.compacting(
  'brassworks:hyper_experience_block',
  [Fluid.of('create_enchantment_industry:hyper_experience', 27), 'minecraft:honeycomb']
  )
  .id('kubejs:brassworks_hyper_experience_block_from_compacting_honeycomb')
  

  event.recipes.create.compacting(
  'brassworks:hyper_experience_block',
  [Fluid.of('create_enchantment_industry:hyper_experience', 27), 'minecraft:slime_ball']
  )
  .id('kubejs:brassworks_hyper_experience_block_from_compacting_slimeball')


  event.recipes.create.emptying(
  Fluid.of('create_enchantment_industry:hyper_experience', 27), 'brassworks:hyper_experience_block'
  )
  .id('kubejs:brassworks_hyper_experience_block_to_liquid')

    event.recipes.create.emptying(
  Fluid.of('create_enchantment_industry:hyper_experience', 12), 'brassworks:hyper_experience_heap'
  )
  .id('kubejs:brassworks_hyper_experience_heap_to_liquid')



    event.recipes.create.emptying(
  Fluid.of('create_enchantment_industry:hyper_experience', 3), 'brassworks:hyper_experience_nugget'
  )
  .id('kubejs:brassworks_hyper_experience_nugget_to_liquid')


  event.shaped('brassworks:hyper_experience_block', [
    'NNN',
    'NNN',
    'NNN'
  ], {
    N: 'brassworks:hyper_experience_nugget'
  }).id('kubejs:brassworks/hyper_experience_block_from_nuggets')
})