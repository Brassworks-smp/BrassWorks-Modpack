// Use ClientEvents.init to register client commands
ClientEvents.init(event => {
    console.log("======= BIOME REGISTRY DUMP (CLIENT) =======");
    
    // Register the client command
    event.registerClientCommand('dumpibiomes', 'Lists all biomes', (args) => {
        // Access the biome registry through the client's registry access
        const biomeRegistryKey = Java.type('net.minecraft.core.registries.Registries').BIOME;
        const minecraft = Client.minecraft;
        const allBiomes = minecraft.level.registryAccess().registryOrThrow(biomeRegistryKey);
        
        // Print all biome IDs in a sorted list
        const biomeList = [];
        allBiomes.keySet().forEach(id => {
            biomeList.push(id.toString());
        });
        
        biomeList.sort().forEach(biome => {
            console.log(biome);
        });
        
        // Display information in game chat too
        Client.player.tell(Text.of(`Total biomes found: ${biomeList.length}`).gold());
        console.log(`Total biomes found: ${biomeList.length}`);
        console.log("============================================");
    });
    
    console.log("Type /kjs dumpibiomes in-game to see the biome list");
});