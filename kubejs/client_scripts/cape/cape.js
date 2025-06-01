let gists_id = '6e223cae5b157ebba1e31da7d14c2d16';

CapeJS.addCapes(event => {
    // Read the UUIDs and cape info from the JSON file
    let capeData = JsonIO.read('kubejs/assets/capedb.json');
    if (capeData) {
        for (let uuid in capeData) {
            let info = capeData[uuid];
            let capeType = info.cape;  // Access cape property
            event.register(uuid, capeType);
        }
    }
});
