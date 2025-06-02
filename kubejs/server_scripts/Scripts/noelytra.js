ItemEvents.rightClicked(event => {
    const { item, player, hand } = event;
    const chestItem = player.inventory.getArmor(2);
    if (!chestItem || chestItem.id !== 'minecraft:elytra') return;
    if (!item || hand !== 'main_hand' || item.id !== 'minecraft:firework_rocket') return;
    player.tell('\u00A7cElytra Firework Boosting is disabled for balancing reasons! Please use Immersive Aircrafts or Trains instead.');
    event.cancel();
});