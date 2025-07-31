let gists_iddonate = '15b3a0db45bd57d54ba20d5e27394f49'

StartupEvents.init(event => {
        NetJS.getGists(gists_iddonate, resultdonate => {
            if (resultdonate.success) {
                JsonIO.write('kubejs/assets/donate.json', resultdonate.raw)
                console.log('Raw result written to kubejs/assets/donate.json')
            } else {
                console.log(resultdonate.exception)
            }
        })
})
