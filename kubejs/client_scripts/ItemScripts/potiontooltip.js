const ItemStack = Java.loadClass("net.minecraft.world.item.ItemStack");
const Items = Java.loadClass("net.minecraft.world.item.Items");
const PotionUtils = Java.loadClass("net.minecraft.world.item.alchemy.PotionUtils");
const BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries");
const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");

// Converts 0 = I, 1 = II, etc.
function getRomanNumeral(n) {
  const numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return numerals[n] ?? `${n + 1}`;
}

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins > 0 && secs > 0) return `${mins}min ${secs}s`;
  if (mins > 0) return `${mins}min`;
  return `${secs}s`;
}

function getPotionEffectData(potionId) {
  if (!potionId) return null;
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

const skipList = ['minecraft:awkward', 'minecraft:mundane', 'minecraft:thick'];

ItemEvents.tooltip(tooltip => {
  tooltip.addAdvanced('create_factory_logistics:copper_jar_package_8x8', (item, advanced, text) => {
    const fluid = item?.nbt?.Fluid;
    if (!fluid || fluid.FluidName !== 'create:potion') return;

    const potionId = fluid.Tag?.Potion;
    const amount = fluid.Amount ?? 0;

    if (!potionId || amount <= 0 || skipList.includes(potionId)) return;

    const effect = getPotionEffectData(potionId);
    if (!effect) return;

    const { amplifier, duration } = effect;
    const scaledDuration = Math.floor((duration / 250) * amount);
    if (scaledDuration <= 0) return;

    const seconds = Math.floor(scaledDuration / 20);
    const durationStr = formatDuration(seconds);
    const ampStr = getRomanNumeral(amplifier);

    let insertIndex = tooltip.shift ? 14 : 3;
    if ((item?.nbt + '').includes('Address:')) insertIndex++;

    text.add(insertIndex, Text.of(`Amplifier: ${ampStr}`).gray());
    text.add(insertIndex, Text.of(`Duration: ${durationStr}`).gray());
  });
});

