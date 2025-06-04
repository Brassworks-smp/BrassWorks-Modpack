const noplacementblocks = [
    'createenchantablemachinery:enchantable_mechanical_press',
    'createenchantablemachinery:enchantable_millstone',
    'createenchantablemachinery:enchantable_encased_fan',
    'createenchantablemachinery:enchantable_crushing_wheel',
    'createenchantablemachinery:enchantable_mechanical_harvester',
    'createenchantablemachinery:enchantable_mechanical_plough',
    'createenchantablemachinery:enchantable_mechanical_saw',
    'createenchantablemachinery:enchantable_mechanical_mixer',
    'createenchantablemachinery:enchantable_mechanical_roller',
    'createenchantablemachinery:enchantable_spout',
    'createenchantablemachinery:enchantable_crushing_wheel_controller'
]

 	BlockEvents.placed(event => {
    if (noplacementblocks.includes(event.block.id)) {
        event.cancel()
    }
})