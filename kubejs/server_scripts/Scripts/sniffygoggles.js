// Use ItemEvents.entityInteracted for direct entity interaction
ItemEvents.entityInteracted(event => {
  const { item, target: entity } = event;

  // Early exit if the item is not goggles or the entity is not a sniffer
  if (!item || item.id !== 'create:goggles' || !entity || entity.type !== 'minecraft:sniffer') {
    return;
  }

  // Read the sniffer's NBT to see if it's already on our team
  const nbt = entity.getNbt();
  if (nbt.Team === 'sniffy') {
    return; // Exit early if the sniffer is already on the team
  }

  const uuid = entity.uuid.toString();

  // Ensure the team exists
  event.server.runCommandSilent(`team add sniffy`);

  // Play the equip sound only if the sniffer is NOT already on the team
  event.server.runCommandSilent(
    `execute as ${uuid} run execute at @s unless entity @s[team=sniffy] run playsound minecraft:item.armor.equip_gold player @a ~ ~ ~ 1 1`
  );

  // Join the team only if not already a member
  event.server.runCommandSilent(
    `execute as ${uuid} unless entity @s[team=sniffy] run team join sniffy @s`
  );

  // Cancel the interaction so nothing else happens
  event.cancel();
});