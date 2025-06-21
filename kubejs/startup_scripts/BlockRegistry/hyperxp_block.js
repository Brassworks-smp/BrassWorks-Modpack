StartupEvents.registry('block', event => {
  const SoundType = Java.loadClass('net.minecraft.world.level.block.SoundType')
  const SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')

  const hyperxpsound = new SoundType(
    1.0, // volume
    0.6, // pitch
    SoundEvents.AMETHYST_BLOCK_BREAK,
    SoundEvents.AMETHYST_BLOCK_STEP,
    SoundEvents.AMETHYST_BLOCK_PLACE,
    SoundEvents.AMETHYST_BLOCK_HIT,
    SoundEvents.AMETHYST_BLOCK_FALL
  )

  event.create('brassworks:hyper_experience_block') 
    .displayName('Block of Hyper Experience')
    .soundType(hyperxpsound)
    .lightLevel(1.0)
    .fullBlock(true)
    .textureAll('brassworks:block/hyper_experience_block')
    .hardness(3.0)
    .resistance(6.0)
    .requiresTool(true)
    .tagBlock('forge:storage_blocks') 
    .tagBlock('minecraft:beacon_base_blocks') 
    .tagBlock('minecraft:mineable/pickaxe')
    .item(item => {
      item.rarity('rare')
      item.tag('forge:storage_blocks')
    })
})