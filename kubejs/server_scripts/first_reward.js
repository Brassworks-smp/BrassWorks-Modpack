PlayerEvents.loggedIn(event => {
    let player = event.player;

    // Check if the player has already received the reward
    if (!player.persistentData.hasReceivedBevels) {
        player.persistentData.hasReceivedBevels = true; // Mark that the player has received the reward
        player.give(Item.of('numismatics:bevel', 50)); // Give the player 50 Bevels
        player.tell(Text.green("You have received 50 Bevels [250¤] as a first-time login reward!"));
        console.info(`[KubeJS] Given 50 Bevels to ${player.name.string} on first login.`);
    }
});
