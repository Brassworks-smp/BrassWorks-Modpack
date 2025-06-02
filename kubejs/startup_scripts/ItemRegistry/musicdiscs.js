let music_list = {
  tears:                   [175, ""], // duration in seconds, tag (for loot table)
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

// put sound to .minecraft\kubejs\assets\kubejs\sounds (sound must be .ogg mono otherwise it will not be 3-dimensional)
// also you need to add sound to sounds.json (.minecraft\kubejs\assets\kubejs) 
StartupEvents.registry('sound_event', e => {
    Object.keys(music_list).forEach(key => {
        e.create(`brassworks:music.${key}`) 
    })
  })
  

  StartupEvents.registry('item', e => {
    Object.keys(music_list).forEach((key) => {
      let value = music_list[key][0]
      let tag = music_list[key][1]  
        e.create(`brassworks:music_disc_${key}`, "music_disc")
            .song(`brassworks:music.${key}`, value)
            .displayName("Music Disc")
            .texture(`brassworks:item/music_disc_${key}`) // put textures file to .minecraft\kubejs\assets\kubejs\textures\item
            .tag("music_discs") // 1.20+ music discs require special tag to enable jukebox functionality (if you want music discs to be obtainable from creepers then use "creeper_drop_music_discs" tag insted)
            .tag(tag)
            .translationKey(`item.kubejs.music_disc_${key}`) //To set disc description add lang file (en_us.json, ru_ru.json, etc.) to the .minecraft\kubejs\assets\kubejs\lang and add entry for every translation key
    })    
  })