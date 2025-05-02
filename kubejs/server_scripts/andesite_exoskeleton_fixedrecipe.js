ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting(
      'create_sa:andesite_exoskeleton_chestplate',
      [
        '01210',
        '00300',
        '54045'
      ],
      {
        '0': 'create:andesite_alloy',
        '1': 'create:shaft',
        '2': 'create:belt_connector',
        '3': 'create_sa:heat_engine',
        '4': 'create:zinc_ingot',
        '5': '#c:stones'
      }
    )
  })
  