let gists_id = '6e223cae5b157ebba1e31da7d14c2d16'

StartupEvents.init(event => { // Gists example
        NetJS.getGists(gists_id, result => { // gists_id must be only id, not url!
            if (result.success) {
                // Write the raw result directly to kubejs/assets/capedb.json
                JsonIO.write('kubejs/assets/capedb.json', result.raw)
                console.log('Raw result written to kubejs/assets/capedb.json')
            } else {
                console.log(result.exception)
            }
        })
})