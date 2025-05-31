let gists_id = '6e223cae5b157ebba1e31da7d14c2d16'

// Function to fetch and write the cape DB
function fetchCapeDB() {
    NetJS.getGists(gists_id, result => {
        if (result.success) {
            JsonIO.write('kubejs/assets/capedb.json', result.raw)
            console.log('Raw result written to kubejs/assets/capedb.json (client)')
        } else {
            console.log(result.exception)
        }
    })
}

// Run once on client load
ClientEvents.init(() => {
    fetchCapeDB()
    // Schedule to run every 30 minutes (1800 seconds)
    setInterval(fetchCapeDB, 1800 * 1000)
})