
MoreJSEvents.wandererTrades((event) => {
    const simpleTrade = VillagerUtils.createSimpleTrade("13x minecraft:emerald", "brassworks:music_disc_truce")
    event.addTrade(2, simpleTrade);
});