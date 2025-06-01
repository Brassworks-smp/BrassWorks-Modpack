MoreJSEvents.wandererTrades((event) => {
    const discPrices = {
        "brassworks:music_disc_truce": 13,
        "brassworks:music_disc_precipice": 21,
        "brassworks:music_disc_creator": 27,
        "brassworks:music_disc_creator_music_box": 30
    };

    Object.entries(discPrices).forEach(([disc, price]) => {
        const trade = VillagerUtils.createSimpleTrade(`${price}x minecraft:emerald`, disc);
        event.addTrade(2, trade);
    });
});