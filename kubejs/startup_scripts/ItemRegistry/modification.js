ItemEvents.modification(event => {
  event.modify('create_factory_logistics:copper_jar_package_8x8', item => {
    item.maxStackSize = 16
  })
})