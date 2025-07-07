ItemEvents.rightClicked(event => {
  const { item, player, hand, server } = event;
  if (!item || item.id !== 'minecraft:firework_rocket') return;

  let fireworksTag = item.nbt?.Fireworks;
  let flightValue = fireworksTag?.Flight ?? 0;
  
  if (flightValue !== 0.3) {
    if (!item.nbt) item.nbt = {};
    if (!item.nbt.Fireworks) item.nbt.Fireworks = {};
    item.nbt.Fireworks.Flight = 0.3;

    player.setItemInHand(hand, item);

    event.cancel();
  }
});