ItemEvents.rightClicked(event => {
    const { item, player } = event;
    const chestItem = player.inventory.getArmor(2);
    if (!chestItem || chestItem.id !== 'minecraft:elytra') return;
    if (!item || item.id !== 'minecraft:firework_rocket') return;
    // Trigger for both hands
    player.tell('\u00A7cElytra Firework Boosting is disabled for balancing reasons! Please use Immersive Aircrafts or Trains instead.');
    event.cancel();
});