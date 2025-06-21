ItemEvents.rightClicked(event => {
    const { item, player, server } = event;
    if (!item) return;

    const id = item.id;

    // EARLY EXIT: Only handle jars, nuggets, and heaps
    if (
        id !== 'create_factory_logistics:copper_jar_package_8x8' &&
        id !== 'brassworks:hyper_experience_nugget' &&
        id !== 'brassworks:hyper_experience_heap'
    ) return;

    const isJar = id === 'create_factory_logistics:copper_jar_package_8x8';
    const hyperXPItems = {
        'brassworks:hyper_experience_nugget': 3,
        'brassworks:hyper_experience_heap': 12
    };

    let offsetmultiplier = 1;
    let xp = 0;
    let orb = 'minecraft:experience_orb';
    let consumeAmount = 1;

    if (isJar) {
        if (!player.isCrouching()) return;
        const fluid = item?.nbt?.Fluid?.FluidName;
        const amount = item?.nbt?.Fluid?.Amount || 0;
        const isHyper = fluid === 'create_enchantment_industry:hyper_experience';
        const multiplier = isHyper ? 10 : 1;
        xp = Math.floor(amount * offsetmultiplier * multiplier);
        if (isHyper) orb = 'create_enchantment_industry:hyper_experience_orb';
    } else {
        const xpPerItem = Math.floor(hyperXPItems[id] * offsetmultiplier * 10);
        consumeAmount = player.isCrouching() ? 1 : item.count;
        xp = xpPerItem * consumeAmount;
        orb = 'create_enchantment_industry:hyper_experience_orb';
    }

    if (xp <= 0) return;

    const { x, y, z } = player;
    server.runCommandSilent(`summon ${orb} ${x} ${y + 1} ${z} {clumpedMap:{1:${xp}}}`);
    const pitch = (Math.random() * 0.5 + 1).toFixed(2);
    server.runCommandSilent(`playsound minecraft:block.amethyst_block.break player @a ${x} ${y + 1} ${z} 1 ${pitch}`);
    item.count -= consumeAmount;
    event.cancel();
});
