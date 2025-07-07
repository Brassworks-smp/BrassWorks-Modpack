const jademachineryTooltips = {
    'createenchantablemachinery:enchantable_mechanical_press': [
        Text.red('This Mechanical Press is disabled.'),
        Text.red('Use the normal Mechanical Press.')
    ],
    'createenchantablemachinery:enchantable_millstone': [
        Text.red('This Millstone is disabled.'),
        Text.red('Use the regular Millstone instead.')
    ],
    'createenchantablemachinery:enchantable_encased_fan': [
        Text.red('This Encased Fan is disabled.'),
        Text.red('Please switch to the standard version.')
    ],
    'createenchantablemachinery:enchantable_crushing_wheel': [
        Text.red('This Crushing Wheel is disabled.'),
        Text.red('Use the original Crushing Wheel.')
    ],
    'createenchantablemachinery:enchantable_mechanical_harvester': [
        Text.red('This Mechanical Harvester is disabled.'),
        Text.red('Use the normal Mechanical Harvester.')
    ],
    'createenchantablemachinery:enchantable_mechanical_plough': [
        Text.red('This Mechanical Plough is disabled.'),
        Text.red('Use the Create version instead.')
    ],
    'createenchantablemachinery:enchantable_mechanical_saw': [
        Text.red('This Mechanical Saw is disabled.'),
        Text.red('Use the base mod’s version.')
    ],
    'createenchantablemachinery:enchantable_mechanical_mixer': [
        Text.red('This Mechanical Mixer is disabled.'),
        Text.red('Switch to the default mixer.')
    ],
    'createenchantablemachinery:enchantable_mechanical_roller': [
        Text.red('This Mechanical Roller is disabled.'),
        Text.red('Please use the standard one.')
    ],
    'createenchantablemachinery:enchantable_spout': [
        Text.red('This Spout is disabled.'),
        Text.red('Use the regular Spout.')
    ],
    'createenchantablemachinery:enchantable_crushing_wheel_controller': [
        Text.red('This Crushing Wheel Controller is disabled.'),
        Text.red('Use a normal Crushing Wheel Instead.')
    ],
    'brassworks:sniffer_plushie': [
        Text.of("§eThis Sniffer Plushie is a decorative item."),
        Text.of("§cIt is Awarded to Event Winners."),
    ],
}

StartupEvents.postInit((event) => {
    if (!Platform.isClientEnvironment()) return
    addTooltipToBlocks(event)
})

let $WailaClientRegistration
let $WailaBlockAccessor


if (Platform.isClientEnvironment()) {
    $WailaClientRegistration = Java.loadClass("snownee.jade.impl.WailaClientRegistration")
    $WailaBlockAccessor = Java.loadClass("snownee.jade.api.BlockAccessor")
}

let addTooltipToBlocks = (event) => {
    $WailaClientRegistration.INSTANCE.addTooltipCollectedCallback(0, (tooltip, accessor) => {
        if (!(accessor instanceof $WailaBlockAccessor)) return
        let id = accessor.block.id
        if (!jademachineryTooltips[id]) return

        jademachineryTooltips[id].forEach(line => {
            tooltip["add(net.minecraft.network.chat.Component)"](line)
        })
    })
}
