// Define tool IDs
const hyperTools = {
  'brassworks:hyper_experience_sword': 'hyperXPSword',
  'brassworks:hyper_experience_pickaxe': 'hyperXPPickaxe',
  'brassworks:hyper_experience_axe': 'hyperXPAxe',
  'brassworks:hyper_experience_shovel': 'hyperXPShovel'
};

// Temporary context stores
const recentBreaks = {};
const recentHits = {};

// Track block breaks
BlockEvents.broken(event => {
  const player = event.player;
  if (!player) return;

  recentBreaks[player.uuid] = {
    x: event.block.pos.x,
    y: event.block.pos.y,
    z: event.block.pos.z
  };

  player.server.scheduleInTicks(1, () => {
    delete recentBreaks[player.uuid];
  });
});

// Track entity hits
EntityEvents.hurt(event => {
  const source = event.source;
  const attacker = source.attacker ?? source.actual;
  if (!attacker || !attacker.isPlayer()) return;

  recentHits[attacker.uuid] = {
    x: event.entity.x,
    y: event.entity.y,
    z: event.entity.z
  };

  attacker.server.scheduleInTicks(1, () => {
    delete recentHits[attacker.uuid];
  });
});

// Main logic on durability change
PlayerEvents.inventoryChanged(event => {
  const player = event.player;
  const itemNow = event.item;
  if (!itemNow || itemNow.isEmpty() || !(itemNow.id == player.mainHandItem.id)) return;


  const toolnameid = itemNow.id;
  const dataKey = hyperTools[toolnameid];
  if (!dataKey) return;

  const currentDamage = itemNow.nbt?.Damage ?? 0;
  const lastDamage = player.persistentData[dataKey] ?? -1;

  // Store new durability
  player.persistentData[dataKey] = currentDamage;

  // Only trigger if durability increased
  if (lastDamage >= currentDamage) return;

  // 5% chance to spawn XP
  if (Math.random() <= 0.08) {
    const pos = recentHits[player.uuid] ?? recentBreaks[player.uuid];

    const [x, y, z] = pos
      ? [pos.x, pos.y, pos.z]
      : [player.x, player.y, player.z];

    const xp = 10;

    event.server.runCommandSilent(
      `summon create_enchantment_industry:hyper_experience_orb ${x} ${y} ${z} {clumpedMap:{1:${xp}}}`
    );
  }
});
