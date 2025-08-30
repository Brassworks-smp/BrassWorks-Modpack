const veridium = "brassworks:veridium_discs";
const slime = "minecraft:slime_drop_music_discs";

let music_list = {
  chris:                       [87,  slime],
  door:                        [111, slime],
  droopy_likes:                [209, slime],
  ki:                          [92,  slime],
  intro:                       [276, slime],
  spooky_amethyst:             [292, slime],
  spooky_amethyst_trumpet:     [292, slime],
  eleven:                      [71,  slime],
  taswell:                     [364, slime],
  truce:                       [249, ""],
  creator:                     [176, ""],
  creator_music_box:           [73,  ""],
  precipice:                   [299, ""],
  that_s_amore:                [187, veridium],
  dixie_biscuit:               [199, veridium],
  fukashigi_no_trumpet:        [261, veridium],
  csgo_bhop_song:              [230, veridium],
  its_all_over_but_the_crying: [169, veridium],
  whiskey_cola_and_tequila:    [187, veridium],
  average_summer_song:         [172, veridium],
  warni_warni:                 [430, veridium]
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
