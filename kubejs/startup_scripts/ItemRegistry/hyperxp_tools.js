// kubejs/startup_scripts/brassworks:hyper_experience_tools.js
ItemEvents.toolTierRegistry(event => {
  event.add('hyperxp', tier => {
    tier.uses = 540
    tier.speed = 7
    tier.attackDamageBonus = 2.5
    tier.level = 3
    tier.enchantmentValue = 14
    tier.repairIngredient = '#brassworks:experience_heap_hyper'
  })
  event.add('hyperxpaxe', tier => {
    tier.uses = 540
    tier.speed = 7
    tier.attackDamageBonus = 1.5
    tier.level = 3
    tier.enchantmentValue = 14
    tier.repairIngredient = '#brassworks:experience_heap_hyper'
  })
})


StartupEvents.registry('item', event => {
  const DURABILITY = 540
  const MINING_LEVEL = 'hyperxp'
  const RARITY = 'rare'

  // Sword
  event.create('brassworks:hyper_experience_sword', 'sword')
    .displayName('Hyper Experience Sword')
    .tier(MINING_LEVEL)
    .maxDamage(DURABILITY)
    .rarity(RARITY)
    .glow(true)

  // Pickaxe
  event.create('brassworks:hyper_experience_pickaxe', 'pickaxe')
    .displayName('Hyper Experience Pickaxe')
    .tier(MINING_LEVEL)
    .maxDamage(DURABILITY)
    .rarity(RARITY)
    .glow(true)

  // Axe
  event.create('brassworks:hyper_experience_axe', 'axe')
    .displayName('Hyper Experience Axe')
    .tier('hyperxpaxe')
    .maxDamage(DURABILITY)
    .rarity(RARITY)
    .glow(true)

  // Shovel
  event.create('brassworks:hyper_experience_shovel', 'shovel')
    .displayName('Hyper Experience Shovel')
    .tier(MINING_LEVEL)
    .maxDamage(DURABILITY)
    .rarity(RARITY)
    .glow(true)
})
