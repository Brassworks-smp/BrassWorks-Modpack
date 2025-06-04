
const jademachinery = [ 
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

StartupEvents.postInit((event) => {
    if (!Platform.isClientEnvironment()) return
        addTooltipToBlocks(event)
    })

    let $WailaClientRegistration
    let $WailaBlockAccessor
    if (Platform.isClientEnvironment()){
        $WailaClientRegistration = Java.loadClass("snownee.jade.impl.WailaClientRegistration")
        $WailaBlockAccessor = Java.loadClass("snownee.jade.api.BlockAccessor")
    }

    let addTooltipToBlocks = (event) => {
    $WailaClientRegistration.INSTANCE.addTooltipCollectedCallback(0, (tooltip, accessor) => {
        if (!(accessor instanceof $WailaBlockAccessor)) return
        if (!jademachinery.includes(accessor.block.id)) return
        let addToTooltip = comp => tooltip["add(net.minecraft.network.chat.Component)"](comp)
            addToTooltip(Text.red('This machine is disabled by the Brassworks SMP, and will not work!'))
            addToTooltip(Text.red('Please use the unenchanted version of this machine instead.'))
  })
}