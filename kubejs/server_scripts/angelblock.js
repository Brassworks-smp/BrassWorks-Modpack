ServerEvents.recipes(event => {
  event.remove({output: 'angelblockrenewed:angel_block'})
  
  event.shaped('angelblockrenewed:angel_block', [
    'FRF',
    'RGR',
    'FRF'
  ], {
    F: 'minecraft:feather',
    R: 'create:refined_radiance',
    G: '#kubejs:decorative_glass_blocks'
  })
  .id('kubejs:angel_block_refined_radiance')
})

ServerEvents.tags('item', event => {
  event.add('kubejs:decorative_glass_blocks', [
    '#createframed:stained_framed_glass',
    '#createframed:stained_tiled_glass',
    '#createframed:vertical_stained_framed_glass',
    '#createframed:horizontal_stained_framed_glass',
    'create:tiled_glass',
    'create:framed_glass',
    'create:horizontal_framed_glass',
    'create:vertical_framed_glass'
  ])
})