let gists_idserver = '935527fdad7d0172f4d67f71312718f9'

StartupEvents.init(event => {
        NetJS.getGists(gists_idserver, resultserver => {
            if (resultserver.success) {
                JsonIO.write('kubejs/assets/serverip.json', resultserver.raw)
                console.log('Raw resultserver written to kubejs/assets/serverip.json')
            } else {
                console.log(resultserver.exception)
            }
        })
})
