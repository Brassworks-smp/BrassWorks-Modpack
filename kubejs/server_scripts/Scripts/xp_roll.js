ItemEvents.foodEaten(event => {
  const { item, player, server } = event;
  const { x, y, z } = player;

  const orbMap = {
    'brassworks:xp_roll': {
      type: 'experience_orb',
      clumped: 4
    },
    'brassworks:hyper_xp_roll': {
      type: 'create_enchantment_industry:hyper_experience_orb',
      clumped: 40
    }
  };

  const orb = orbMap[item.id];
  if (orb) {
    server.runCommandSilent(`summon ${orb.type} ${x} ${y + 1} ${z} {clumpedMap:{1:${orb.clumped}}}`);
  }
});
