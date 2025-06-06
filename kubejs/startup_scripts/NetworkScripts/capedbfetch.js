let gists_idcape = '6e223cae5b157ebba1e31da7d14c2d16'

StartupEvents.init(event => {
        NetJS.getGists(gists_idcape, resultcape => {
            if (resultcape.success) {
                JsonIO.write('kubejs/assets/capedb.json', resultcape.raw)
                console.log('Raw result written to kubejs/assets/capedb.json')
            } else {
                console.log(resultcape.exception)
            }
        })
})