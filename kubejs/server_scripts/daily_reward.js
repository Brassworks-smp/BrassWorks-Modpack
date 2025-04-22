let tickCounter = 0;
const CHECK_INTERVAL = 20 * 10;
const DAYS_REQUIRED = 1; 
const ITEM_TO_GIVE = 'numismatics:bevel'; 

ServerEvents.tick(event => {
    if (++tickCounter < CHECK_INTERVAL) return;
    tickCounter = 0; 

    let level = event.server.overworld();
    let currentDay = Math.floor(level.getDayTime() / 24000);
    
    console.info(`[KubeJS] Tick Event - Minecraft Day: ${currentDay}`);

    level.players.forEach(player => {
        console.info(`[KubeJS] Checking player ${player.name.string}`);

        if (typeof player.persistentData.lastGiftDay !== 'number') {
            player.persistentData.lastGiftDay = -DAYS_REQUIRED;
        }

        if (currentDay - player.persistentData.lastGiftDay >= DAYS_REQUIRED) {
            player.persistentData.lastGiftDay = currentDay;
            player.give(Item.of(ITEM_TO_GIVE, 5));
            player.tell(Text.green(`You Received 5 bevels [40¤] as your daily reward`));
            console.info(`[KubeJS] Reward given to ${player.name.string}`);
        }
    });
});
