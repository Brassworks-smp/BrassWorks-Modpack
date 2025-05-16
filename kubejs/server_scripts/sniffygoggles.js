// Use ItemEvents.entityInteracted for direct entity interaction
ItemEvents.entityInteracted(event => {
  const { item, target: entity } = event;

  if (item.id === 'create:goggles' && entity.type === 'minecraft:sniffer') {
    // read the sniffer's NBT to see if it's already on our team
    const nbt = entity.getNbt();
    if (nbt.Team !== 'sniffy') {
      const uuid = entity.uuid.toString();

      // ensure the team exists
      event.server.runCommandSilent(`team add sniffy`);

      // play the equip sound only if the sniffer is NOT already on the team
      event.server.runCommandSilent(
        `execute as ${uuid} run execute at @s unless entity @s[team=sniffy] run playsound minecraft:item.armor.equip_gold player @p[distance=..10]`
      );

      // join the team only if not already a member
      event.server.runCommandSilent(
        `execute as ${uuid} unless entity @s[team=sniffy] run team join sniffy @s`
      );

      // cancel the interaction so nothing else happens
      event.cancel();
    }
  }
});