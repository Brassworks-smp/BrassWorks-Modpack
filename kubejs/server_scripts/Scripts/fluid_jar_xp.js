ItemEvents.rightClicked(event => {
    const { item, player, hand, server } = event;

    if (
        !item ||
        item.id !== 'create_factory_logistics:copper_jar_package_8x8' ||
        !item.nbt ||
        item.nbt?.Fluid?.FluidName !== 'create_enchantment_industry:experience' ||
        !player.isCrouching()
    ) {
        return;
    }

    const fluidAmount = item.nbt.Fluid.Amount;
    const xpPerMillibucket = 0.9999;

    let totalXP = Math.floor(fluidAmount * xpPerMillibucket);

    if (totalXP <= 0) {
        totalXP = 1;
    }
    if (totalXP > 0) {
        const { x, y, z } = player;
        const command = `summon minecraft:experience_orb ${x} ${y + 1} ${z} {clumpedMap:{1:${totalXP}}}`;
        server.runCommandSilent(command);
        const pitch = (Math.random() * 0.5 + 1).toFixed(2);
        const soundCommand = `playsound minecraft:block.amethyst_block.break player @a ${x} ${y + 1} ${z} 1 ${pitch}`;
        server.runCommandSilent(soundCommand);
        item.count--;
    }
    event.cancel();
});
