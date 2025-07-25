PlayerEvents.chat(event => {
    if (event.message.includes('69')) {
      event.server.scheduleInTicks(1, () => {
        event.server.runCommandSilent('say 69, Nice 👌')
      })
	}
	if (event.message.includes('420')) {
      event.server.scheduleInTicks(1, () => {
        event.server.runCommandSilent('say 420, 🤯💨🌿')
      })
	
    }
  })