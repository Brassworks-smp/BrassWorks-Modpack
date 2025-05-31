// File: kubejs/server_scripts/createaddition_restore.js

ServerEvents.recipes(event => {
  // Barbed Wire
  event.shaped('2x createaddition:barbed_wire', [
    ' W ',
    'W W',
    ' W '
  ], {
    W: 'create:iron_sheet'
  });

  // Bioethanol Mixing
  event.recipes.create.mixing(Fluid.of('createaddition:bioethanol', 125), [
    'minecraft:sugar',
    'create:cinder_flour',
    'createaddition:biomass',
    'createaddition:biomass'
  ]);

  // Biomass Compacting
  event.recipes.create.compacting([
    Fluid.of('minecraft:water', 50),
    Item.of('createaddition:biomass_pellet')
  ], [
    'createaddition:biomass'
  ]);

  // Biomass Pellet Block
  event.shaped('createaddition:biomass_pellet_block', [
    'PPP',
    'PPP',
    'PPP'
  ], {
    P: 'createaddition:biomass_pellet'
  });

  // Biomass Pellet Uncrafting (Block → 9 Pellets)
  event.shapeless('9x createaddition:biomass_pellet', [
    'createaddition:biomass_pellet_block'
  ]);

  
	// Straw Recipe
	event.shaped(
		Item.of('createaddition:straw'),
		[ 
		  ' SS', 
		  ' S ',
		  ' S '  
		],
		{
		S: 'create:sturdy_sheet',
		}
	  )

  // Seed Oil Compacting
  event.recipes.create.compacting(Fluid.of('createaddition:seed_oil', 100), '#forge:seeds');

  // Lava Liquid Burning
  event.custom({
    type: 'createaddition:liquid_burning',
    input: { fluidTag: 'minecraft:lava', amount: 1000 },
    burnTime: 20000
  });

  // Plant Oil Liquid Burning
  event.custom({
    type: 'createaddition:liquid_burning',
    input: { fluidTag: 'forge:plantoil', amount: 1000 },
    burnTime: 4800
  });

  // Biofuel Liquid Burning
  event.custom({
    type: 'createaddition:liquid_burning',
    input: { fluidTag: 'forge:biofuel', amount: 1000 },
    burnTime: 24000,
    superheated: true
  });

  // Netherrack Mixing
  event.recipes.create.mixing('minecraft:netherrack', [
    '#forge:cobblestone',
    'create:cinder_flour',
    Fluid.of('minecraft:lava', 25)
  ]);
});
