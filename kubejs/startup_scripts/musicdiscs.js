  let music_list = {
    tears: 175,   // duration in seconds
    truce: 249
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
      let value = music_list[key]  
        e.create(`brassworks:music_disc_${key}`, "music_disc")
            .song(`brassworks:music.${key}`, value)
            .displayName("Music Disc")
            .texture(`brassworks:item/music_disc_${key}`) // put textures file to .minecraft\kubejs\assets\kubejs\textures\item
            .tag("music_discs") // 1.20+ music discs require special tag to enable jukebox functionality (if you want music discs to be obtainable from creepers then use "creeper_drop_music_discs" tag insted)
            .translationKey(`item.kubejs.music_disc_${key}`) //To set disc description add lang file (en_us.json, ru_ru.json, etc.) to the .minecraft\kubejs\assets\kubejs\lang and add entry for every translation key
          })
  })