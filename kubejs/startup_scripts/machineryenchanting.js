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
    'create_sa:copper_jetpack_chestplate'
]

ForgeEvents.onEvent("net.minecraftforge.event.AnvilUpdateEvent", event => {
    const left = event.getLeft()
    
    if ( machinery.includes(left.getId())){
        event.setCost(32767);
        event.setCanceled(true);
    }
})
// couldnt get this working
/*ForgeEvents.onEvent("net.minecraftforge.event.AnvilUpdateEvent", event => {
	const machinery = ["create:mechanical_drill", "create:mechanical_saw"]
    const left = event.getLeft()
    const right = event.getRight()


    if ( machinery.includes(left.getId()) && right.item == Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1)) {
            //any changes to the cost or output go here:
            console.info("can enchant")
        
    } else {
        event.setCanceled(true);
    }
}); */