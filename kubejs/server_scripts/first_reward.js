PlayerEvents.loggedIn(event => {
    let player = event.player;

    // Check if the player has already received the reward
    if (!player.persistentData.hasReceivedBevels) {
        player.persistentData.hasReceivedBevels = true; // Mark that the player has received the reward
        player.give(Item.of('numismatics:bevel', `16`)); 
        player.tell(Text.green("You have received 16 Bevels as a first-time login reward!"));
        console.info(`[KubeJS] Given 16 Bevels to ${player.name.string} on first login.`);
    }
});
