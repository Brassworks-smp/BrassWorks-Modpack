CapeJS.addCapes(event => {
    // Read the UUIDs and cape types from the JSON file
    let capeData = JsonIO.read('kubejs/assets/capedb.json');
    if (capeData) {
        for (let uuid in capeData) {
            let capeType = capeData[uuid];
            event.register(uuid, capeType);
        }
    }
});