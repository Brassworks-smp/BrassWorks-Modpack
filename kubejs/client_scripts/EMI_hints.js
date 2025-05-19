JEIEvents.information(event => {
  const itemHints = {
    // Natural Resources
    'create:limestone': [
      'Can be generated like a cobblestone generator,',
      'but replace water with honey.',
      'When flowing honey meets lava, limestone forms.'
    ],
    'create:scoria': [
      'Can be generated like a cobblestone generator,', 
      'but replace water with chocolate.',
      'When flowing chocolate meets lava, scoria forms.'
    ],
    // Tools and Equipment
    'artifacts:night_vision_goggles': [
      'Provides fullbright vision when worn,',
      'allowing clear visibility in dark environments.'
    ],
    'create:extendo_grip': [
      'Provides extended reach distance,',
      'allowing interaction with blocks from further away.'
    ],
    'create:wand_of_symmetry': [
      'Automatically mirrors your building actions,',
      'enabling perfectly symmetrical constructions.'
    ],
    'create_sa:grapplin_whisk': [
      'Provides rapid travel capabilities,',
      'useful for navigating large builds quickly.'
    ],
    
    // Storage Solutions
    'supplementaries:jar': [
      'Decorative storage for small items like cookies,',
      'adds visual appeal to storage areas.'
    ],
    'create:item_vault': [
      'High-capacity storage for bulk items,',
      'can be accessed via item hatches for automation.'
    ],
    'create_connected:item_silo': [
      'Vertical storage solution for bulk items,',
      'ideal for storing large quantities of a single item type.'
    ],
    'create_connected:fluid_vessel': [
      'Horizontal tank for fluid storage,',
      'provides aesthetically pleasing liquid storage solutions.'
    ],
    
    // Automation Components
    'create:mechanical_plough': [
      'Capable of tilling soil without trampling crops,',
      'excellent for automated farming systems.'
    ],
    'sliceanddice:sprinkler': [
      'Waters crops in a defined area,',
      'improves growth rate and efficiency.'
    ],
    'create:mechanical_saw': [
      'Can automate Chipped recipes when properly configured,',
      'offering expanded automation options.'
    ],
    'missions:mechanical_exchanger': [
      'Automatically converts between currency denominations,',
      'useful for shop and economy systems.'
    ],
    'create:factory_gauge': [
      'Provides enhanced automation capabilities,',
      'simplifies complex automation setups.'
    ],
    'direct_chute:direct_chute': [
      'Transfers items instantly from input to output,',
      'with no internal storage, ideal for fast transport.'
    ],
    'createadvlogistics:package_wormhole': [
      'Allows instantaneous teleportation of packages,',
      'regardless of distance between endpoints.'
    ],
    'create_connected:inventory_access_port': [
      'Expands inventory capabilities,',
      'enabling more compact automation builds.'
    ],
    'trading_floor:trading_depot': [
      'Automates villager trading when integrated with',
      'Create contraptions for efficient resource acquisition.'
    ],
    'create_sa:portable_drill': [
      'Excavates large areas quickly,',
      'significantly reduces mining time.'
    ],
    'create_connected:parallel_gearbox': [
      'Enables compact machinery setups,',
      'by redirecting rotational power efficiently.'
    ],
    'create_connected:linked_transmitter': [
      'Combines lever functionality with redstone links,',
      'providing wireless control in a single block.'
    ],
    'create_connected:inventory_bridge': [
      'Connects two inventories without requiring pipes,',
      'creating direct transfer connections.'
    ],
    'create_connected:shear_pin': [
      'Safety component that breaks when mechanical network overstresses,',
      'preventing widespread damage to contraptions.'
    ],
    'create:package_filter': [
      'Controls package flow based on addressing,',
      'enabling sophisticated sorting systems.'
    ],
    'create:controller_rail': [
      'Functions like powered rails but provides directional control,',
      'ideal for complex minecart systems.'
    ],
    'create:desk_bell': [
      'When placed on elevators, produces a notification sound',
      'upon reaching a floor, enhancing user experience.'
    ],
    '#create:postboxes': [
      'Enables package transport via train systems,',
      'facilitating long-distance logistics.'
    ],
    'permanentsponges:aqueous_sponge': [
      'Effectively clears large bodies of water,',
      'without becoming saturated like standard sponges.'
    ],
    'permanentsponges:magmatic_sponge': [
      'Effectively clears large bodies of lava,',
      'without becoming saturated like standard sponges.'
    ],
    'create:package_frogport': [
      'Used to deploy packages on chain conveyors and retrieve them,',
      'supports wildcard addressing with * for flexible routing.'
    ],
    
    // Misc Items
    'connectedglass:scratched_glass': [
      'Provides the original glass texture,',
      'offers nostalgic aesthetic options.'
    ],
    'artifacts:whoopee_cushion': [
      'Produces flatulence sounds when used,',
      'primarily serves as a novelty item.'
    ],
    'supplementaries:flute': [
      'Can play the "Never Gonna Give You Up" melody,',
      'useful for light-hearted pranks.'
    ],
    'supplementaries:confetti_popper': [
      'Creates celebratory effects when used,',
      'ideal for marking special occasions.'
    ],
    'exposure:camera': [
      'Allows users to take screenshots with special framing,',
      'creating in-game photography.'
    ],
    'vanillabackport:dried_ghast': [
      'Placing dried ghasts in water creates happy ghasts,',
      'providing unique decorative opportunities.'
    ],
    '#create_sa:jetpack': [
      'Enables aerial mobility,',
      'can be enhanced with fueling and filling tanks.'
    ],
    'supplementaries:pancake': [
      'Functions as both food and a music disc,',
      'can be played in jukeboxes for a unique melody.'
    ],
    '#forge:chalks': [
      'Allows drawing symbols and writing on walls,',
      'useful for marking and decoration.'
    ],
    'createaddition:straw': [
      'Can be used on blaze burners to input liquids directly,',
      'improving fluid management in heating systems.'
    ],
    'create:potato_cannon': [
      'Launches potatoes at high velocity,',
      'provides both utility and entertainment value.'
    ],
    'minecraft:goat_horn': [
      'Produces loud sound effects when used,',
      'audible over long distances.'
    ],
    'exposure:lightroom': [
      'Enables printing of photographs,',
      'preserving in-game memories physically.'
    ],
    '#comforts:sleeping_bags': [
      'Functions like a bed without resetting spawn point,',
      'ideal for temporary resting locations.'
    ],
    '#supplementaries:sign_posts': [
      'Can be placed on fences,',
      'providing clear directional navigation.'
    ],
    'create:tree_fertilizer': [
      'Forces tree growth even in space-restricted areas,',
      'circumventing normal growth requirements.'
    ],
    'supplementaries:dispenser_minecart': [
      'Portable Dispensor,',
      'Make a moving firework show.'
    ],
    'savage_and_ravage:spore_bomb': [
      'Releases baby creepers when detonated,',
      'creating tactical diversions.'
    ],
    
    // Engineering & Power
    'create_enchantment_industry:disenchanter': [
      'Converts enchanted items and XP nuggets into liquid XP,',
      'useful for XP management systems.'
    ],
    'create_sa:flamethrower': [
      'Highly destructive tool,',
      'should be used with extreme caution.'
    ],
    'torchmaster:megatorch': [
      'Prevents hostile mob spawning in a large radius,',
      'excellent for securing extensive areas.'
    ],
    'torchmaster:feral_flare_lantern': [
      'Provides illumination over large areas,',
      'ideal for lighting expansive builds.'
    ],
    'create:pulse_timer': [
      'Creates compact one-block redstone clock circuits,',
      'useful for timing mechanisms.'
    ],
    'supplementaries:speaker_block': [
      'Broadcasts chat messages within a defined radius,',
      'enabling localized communication systems.'
    ],
    'dummmmmmy:target_dummy': [
      'Allows testing of weapons and combat equipment,',
      'displays damage values for analysis.'
    ],
    'supplementaries:bamboo_spikes': [
      'Effective for XP farm designs,',
      'optimizes mob harvesting processes.'
    ],
    'supplementaries:bamboo_spikes_tipped': [
      'Effective for XP farm designs,',
      'optimizes mob harvesting processes.',
      'but with added potion effect being applied.'
    ],
    'create:nozzle': [
      'Enhances mob farm efficiency,',
      'improves resource collection systems.'
    ],
    'missions:jar_of_tips': [
      'Can be interacted by players in claimed chunks',
      'useful in shops to allow players to tip'
    ],
    'chipped:spruce_barrel': [
      'Is the only block that can be interacted with inside a claimed chunk',
      'useful in shops to allow players collect their bought items',
      'make sure not to use it for personal storage in your claimed chunk.'
    ],
    '#create:table_cloths': [
      'Can be used to sell items in shops',
      'right click on stock keeper to set the item to sell',
      'then place it down to display item and configure the price',
    ]
  };

  // Add all the items with their hints
  for (const [itemId, hint] of Object.entries(itemHints)) {
    event.addItem(itemId, hint);
  }
})