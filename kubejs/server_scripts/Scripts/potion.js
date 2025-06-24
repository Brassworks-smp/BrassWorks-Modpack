const ItemStack = Java.loadClass("net.minecraft.world.item.ItemStack");
const Items = Java.loadClass("net.minecraft.world.item.Items");
const PotionUtils = Java.loadClass("net.minecraft.world.item.alchemy.PotionUtils");
const BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries");
const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");

// Function to extract potion effect info
function getPotionEffectData(potionId) {
  const rl = new ResourceLocation(potionId);
  const potion = BuiltInRegistries.POTION.get(rl);
  if (!potion) return null;

  const stack = PotionUtils.setPotion(new ItemStack(Items.POTION), potion);
  const effects = PotionUtils.getMobEffects(stack);
  if (effects.isEmpty()) return null;

  const e = effects.get(0);
  const effectId = BuiltInRegistries.MOB_EFFECT.getKey(e.getEffect()).toString();
  const amplifier = e.getAmplifier();
  const duration = e.getDuration();

  return {
    id: effectId,
    amplifier: amplifier,
    duration: duration
  };
}

ItemEvents.rightClicked(event => {
  const { item, player, server } = event;
  if (!item || !player.isCrouching()) return;

  const jarId = 'create_factory_logistics:copper_jar_package_8x8';
  const fluidName = item?.nbt?.Fluid?.FluidName;
  const potionId = item?.nbt?.Fluid?.Tag?.Potion;
  const fluidAmount = item?.nbt?.Fluid?.Amount || 0;

  if (item.id !== jarId) return;
  if (fluidName !== 'create:potion') return;
  if (!potionId || fluidAmount <= 0) return;

  // Skip non-functional potions
  const skipList = [
    'minecraft:awkward',
    'minecraft:mundane',
    'minecraft:thick'
  ];
  if (skipList.includes(potionId)) return;

  const effect = getPotionEffectData(potionId);
  if (!effect) {
    player.tell(Text.of(`${potionId}: no effect found`));
    return;
  }

  const { id, amplifier, duration } = effect;

  let scaledDuration;
  if (id === 'minecraft:instant_health' || id === 'minecraft:instant_damage') {
    scaledDuration = 20; 
  } else {
    scaledDuration = Math.floor((duration / 250) * fluidAmount);
  }

  if (scaledDuration <= 0) {
    player.tell(Text.of(`${potionId}: effect too short to apply`));
    return;
  }

  server.runCommandSilent(`effect give ${player.username} ${id} ${Math.floor(scaledDuration / 20)} ${amplifier}`);

  const { x, y, z } = player;
  const pitch = (Math.random() * 0.5 + 1).toFixed(2);
  server.runCommandSilent(`playsound minecraft:entity.generic.drink player @a ${x} ${y + 1} ${z} 1 ${pitch}`);
  const pitch2 = (Math.random() * 0.3 + 0.8).toFixed(2);
  server.runCommandSilent(`playsound minecraft:block.brewing_stand.brew player @a ${x} ${y + 1} ${z} 0.3 ${pitch2}`);

  item.count--;
  event.cancel();
});
