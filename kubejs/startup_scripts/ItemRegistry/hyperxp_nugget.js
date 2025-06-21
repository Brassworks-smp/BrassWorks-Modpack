StartupEvents.registry('item', event => {
  event.create('brassworks:hyper_experience_nugget')
    .displayName('Nugget of Hyper Experience')
    .texture('brassworks:item/hyper_experience_nugget')
    .rarity('rare')
    .glow(true)
    .tag('c:nuggets')
    .tag('forge:nuggets')

    event.create('brassworks:hyper_experience_heap')
      .displayName('Heap of Hyper Experience')
      .rarity('rare')
      .glow(true)
})