ServerEvents.tags('item', event => {
    event.add('brassworks:slabfish_breedable', [
        'minecraft:pufferfish',
        'minecraft:cod',
        'environmental:koi',
        'farmersdelight:salmon_slice',
        'minecraft:salmon',
        'farmersdelight:cod_slice'
    ])
})

ItemEvents.entityInteracted(event => {
    const { item, target: entity, player } = event;

    if (!item || !item.hasTag('brassworks:slabfish_breedable') || !entity || entity.type !== 'environmental:slabfish') {
        return; 
    }

    const username = player.name.string
    const allowednames = [
        'Codetronx',
        'SocialRoses'
    ]

    if (!allowednames.includes(username)) {
        player.tell(Text.red(`To squeeze every last damn spur outta slabfish gambling, only Codetronx and SocialRoses are allowed to breed the little fuckers. If that pisses you off, cry harder - I literally do not give a single fk. Bye. -swzo`));
        event.cancel();
    }
});

