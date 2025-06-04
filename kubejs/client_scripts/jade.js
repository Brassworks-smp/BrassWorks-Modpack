// const jademachinery = [
//     'createenchantablemachinery:enchantable_mechanical_press',
//     'createenchantablemachinery:enchantable_millstone',
//     'createenchantablemachinery:enchantable_encased_fan',
//     'createenchantablemachinery:enchantable_crushing_wheel',
//     'createenchantablemachinery:enchantable_mechanical_harvester',
//     'createenchantablemachinery:enchantable_mechanical_plough',
//     'createenchantablemachinery:enchantable_mechanical_saw',
//     'createenchantablemachinery:enchantable_mechanical_mixer',
//     'createenchantablemachinery:enchantable_mechanical_roller',
//     'createenchantablemachinery:enchantable_spout',
//     'createenchantablemachinery:enchantable_crushing_wheel_controller'
// ];

// JadeEvents.onClientRegistration(event => {
//     jademachinery.forEach(blockId => {
//         event.block(blockId, Java.loadClass('net.minecraft.world.level.block.Block'))
//             .tooltip((tooltip, accessor, pluginConfig) => {
//                 tooltip.add(Text.red('This machine is disabled and will not work!'));
//             });
//     });
// });