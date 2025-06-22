const cooldownMap = {};

ItemEvents.entityInteracted(event => {
  const { item, target: entity, player } = event;
  const allowedBoats = [
    'minecraft:boat',
    'quark:quark_boat',
    'snifferplus:stone_pine_boat',
    'blueprint:boat'
  ];

  if (!item || item.id !== 'create:wrench' || !entity || !allowedBoats.includes(entity.type)) {
    return;
  }

  const playerId = player.uuid.toString();
  if (cooldownMap[playerId]) {
    player.tell("§cWait before using this again!");
    return;
  }

  const boatuuid = entity.uuid.toString();
  event.server.runCommandSilent("execute at " + boatuuid + " run ride @e[type=minecart,distance=..2,limit=1] mount " + boatuuid);

  cooldownMap[playerId] = true;
  console.log("Added Boat cooldown: " + playerId);

  event.server.scheduleInTicks(100, () => {
    delete cooldownMap[playerId];
    console.log("Boat cooldown expired: " + playerId);
  });

  event.cancel();
});
