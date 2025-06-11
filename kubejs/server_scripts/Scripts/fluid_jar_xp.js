ItemEvents.rightClicked(event => {
    const { item, player, hand, server } = event;

    // Ensure the item exists and has NBT data
    if (!item || !item.nbt) return;

    // Check if the player is crouching
    if (!player.isCrouching()) {
        return;
    }

    // Check if the item is a fluid jar containing "create_enchantment_industry:experience"
    if (item.id === 'create_factory_logistics:copper_jar_package_8x8' && item.nbt?.Fluid?.FluidName === 'create_enchantment_industry:experience') {
        const fluidAmount = item.nbt.Fluid.Amount; // Amount of fluid in millibuckets
        const xpPerMillibucket = 0.9999; // Fixed XP per millibucket

        // Calculate total XP to summon
        let totalXP = Math.floor(fluidAmount * xpPerMillibucket);

        // Ensure totalXP is at least 1 (avoid rounding to zero)
        if (totalXP <= 0) {
            totalXP = 1;
        }

        // Summon the XP orb at the player's position
        if (totalXP > 0) {
            const { x, y, z } = player;
            const command = `summon minecraft:experience_orb ${x} ${y + 1} ${z} {clumpedMap:{1:${totalXP}}}`;
            server.runCommandSilent(command); // Use server command to summon the XP orb

            // Play the sound with randomized pitch
            const pitch = (Math.random() * 0.5 + 1).toFixed(2); // Random pitch between 1 and 1.5
            const soundCommand = `playsound minecraft:block.amethyst_block.break player @a ${x} ${y + 1} ${z} 1 ${pitch}`;
            server.runCommandSilent(soundCommand); // Use server command to play the sound

            // Decrease the item count or remove the item
            item.count--;
        }

        event.cancel(); // Cancel the default right-click action
    }
});
