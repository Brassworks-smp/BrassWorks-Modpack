// Add brassworks:music_disc_truce to the creeper_drop_music_discs tag
ServerEvents.tags('item', event => {
  event.add('minecraft:creeper_drop_music_discs', 'brassworks:music_disc_truce')
})