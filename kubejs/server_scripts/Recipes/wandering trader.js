MoreJSEvents.villagerTrades((event) => {
    const discPrices = {
        "brassworks:music_disc_truce": 13,
        "brassworks:music_disc_precipice": 21,
        "brassworks:music_disc_creator": 27,
        "brassworks:music_disc_creator_music_box": 30,
        "brassworks:music_disc_chris": 16,
        "brassworks:music_disc_door": 18,
        "brassworks:music_disc_droopy_likes": 25,
        "brassworks:music_disc_ki": 19,
        "brassworks:music_disc_intro": 14,
        "brassworks:music_disc_taswell": 28,
        "brassworks:music_disc_eleven": 22,
        "brassworks:music_disc_spooky_amethyst_trumpet": 24,
        "brassworks:music_disc_spooky_amethyst": 23,
        "create_connected:music_disc_elevator": 20,
        "create_connected:music_disc_interlude": 17,
        "brassworks:music_disc_that_s_amore": 26,
        "brassworks:music_disc_dixie_biscuit": 24,
        "brassworks:music_disc_fukashigi_no_trumpet": 23,
        "brassworks:music_disc_csgo_bhop_song": 22,
        "brassworks:music_disc_its_all_over_but_the_crying": 20,
        "brassworks:music_disc_average_summer_song": 23,
        "brassworks:music_disc_warni_warni": 24
    };

    Object.entries(discPrices).forEach(([disc, price]) => {
        const trade = VillagerUtils.createSimpleTrade(`${price}x minecraft:emerald`, disc);
        trade.villagerExperience(Math.ceil(price * 1.5));
        for (let i = 2; i <= 5; i++) {
            event.addTrade("brassworks_djs:dj", i, trade);
        }
    });
});