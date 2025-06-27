let music_list = {
  truce:                   [249, ""],
  creator:                 [176, ""],
  creator_music_box:       [73,  ""],
  precipice:               [299, ""],
  chris:                   [87,  "minecraft:slime_drop_music_discs"],
  door:                    [111, "minecraft:slime_drop_music_discs"],
  droopy_likes:            [209, "minecraft:slime_drop_music_discs"],
  ki:                      [92,  "minecraft:slime_drop_music_discs"],
  intro:                   [276, "minecraft:slime_drop_music_discs"],
  spooky_amethyst:         [292, "minecraft:slime_drop_music_discs"],
  spooky_amethyst_trumpet: [292, "minecraft:slime_drop_music_discs"],
  eleven:                  [71,  "minecraft:slime_drop_music_discs"],
  taswell:                 [364, "minecraft:slime_drop_music_discs"]
};

// Register sound events
StartupEvents.registry('sound_event', e => {
  Object.keys(music_list).forEach(key => {
    e.create(`brassworks:music.${key}`) 
  })
})

// Register music disc items
StartupEvents.registry('item', e => {
  Object.entries(music_list).forEach(([key, [value, tag]]) => {
    let item = e.create(`brassworks:music_disc_${key}`, "music_disc")
      .song(`brassworks:music.${key}`, value)
      .displayName("Music Disc")
      .texture(`brassworks:item/music_disc_${key}`)
      .tag("music_discs")
      .translationKey(`item.kubejs.music_disc_${key}`);

    if (tag && tag !== "") {
      item.tag(tag);
    }
  })    
})
