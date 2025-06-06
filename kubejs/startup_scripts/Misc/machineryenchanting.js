//startup_scripts/machineryenchanting.js

const machinery = [ 
    'create:mechanical_press',
    'create:millstone',
    'create:encased_fan',
    'create:crushing_wheel',
    'create:mechanical_harvester',
    'create:mechanical_plough',
    'create:mechanical_saw',
    'create:mechanical_mixer',
    'create:mechanical_roller',
    'create:spout',
    'create_sa:copper_jetpack_chestplate'
]

ForgeEvents.onEvent("net.minecraftforge.event.AnvilUpdateEvent", event => {
    const left = event.getLeft()
    
    if ( machinery.includes(left.getId())){
        event.setCost(32767);
        event.setCanceled(true);
    }
})
