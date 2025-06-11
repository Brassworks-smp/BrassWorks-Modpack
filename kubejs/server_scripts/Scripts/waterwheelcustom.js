// Define plank types at the top level to avoid redeclaration
const plankTypes = [
  { id: 'minecraft:oak_planks', name: 'Oak', color: 'b6925e', cmd: 1, log: 'minecraft:block/oak_log', planks: 'minecraft:block/oak_planks' },
  { id: 'minecraft:spruce_planks', name: 'Spruce', color: '806039', cmd: 2, log: 'minecraft:block/spruce_log', planks: 'minecraft:block/spruce_planks' },
  { id: 'minecraft:birch_planks', name: 'Birch', color: 'c6b579', cmd: 3, log: 'minecraft:block/birch_log', planks: 'minecraft:block/birch_planks' },
  { id: 'minecraft:jungle_planks', name: 'Jungle', color: 'a87853', cmd: 4, log: 'minecraft:block/jungle_log', planks: 'minecraft:block/jungle_planks' },
  { id: 'minecraft:acacia_planks', name: 'Acacia', color: 'ab5c31', cmd: 5, log: 'minecraft:block/acacia_log', planks: 'minecraft:block/acacia_planks' },
  { id: 'minecraft:dark_oak_planks', name: 'Dark Oak', color: '4e3118', cmd: 6, log: 'minecraft:block/dark_oak_log', planks: 'minecraft:block/dark_oak_planks' },
  { id: 'minecraft:mangrove_planks', name: 'Mangrove', color: '7d4133', cmd: 7, log: 'minecraft:block/mangrove_log', planks: 'minecraft:block/mangrove_planks' },
  { id: 'minecraft:cherry_planks', name: 'Cherry', color: 'e4c0b9', cmd: 8, log: 'minecraft:block/cherry_log', planks: 'minecraft:block/cherry_planks' },
  { id: 'environmental:willow_planks', name: 'Willow', color: '647650', cmd: 9, log: 'environmental:block/willow_log', planks: 'environmental:block/willow_planks' },
  { id: 'environmental:pine_planks', name: 'Pine', color: 'b2936b', cmd: 10, log: 'environmental:block/pine_log', planks: 'environmental:block/pine_planks' },
  { id: 'environmental:plum_planks', name: 'Plum', color: '56241e', cmd: 11, log: 'environmental:block/plum_log', planks: 'environmental:block/plum_planks' },
  { id: 'environmental:wisteria_planks', name: 'Wisteria', color: 'd6cfb4', cmd: 12, log: 'environmental:block/wisteria_log', planks: 'environmental:block/wisteria_planks' },
  { id: 'quark:ancient_planks', name: 'Ancient', color: 'f4f4f4', cmd: 13, log: 'quark:block/ancient_log', planks: 'quark:block/ancient_planks' },
  { id: 'quark:azalea_planks', name: 'Azalea', color: 'a9b461', cmd: 14, log: 'quark:block/azalea_log', planks: 'quark:block/azalea_planks' },
  { id: 'quark:blossom_planks', name: 'Blossom', color: '612c23', cmd: 15, log: 'quark:block/blossom_log', planks: 'quark:block/blossom_planks' },
  { id: 'minecraft:bamboo_planks', name: 'Bamboo', color: 'd6c05d', cmd: 16, log: 'minecraft:block/bamboo_block', planks: 'minecraft:block/bamboo_planks' },
  { id: 'minecraft:crimson_planks', name: 'Crimson', color: '7d3955', cmd: 17, log: 'minecraft:block/crimson_stem', planks: 'minecraft:block/crimson_planks' },
  { id: 'minecraft:warped_planks', name: 'Warped', color: '388180', cmd: 18, log: 'minecraft:block/warped_stem', planks: 'minecraft:block/warped_planks' },
  { id: 'vanillabackport:pale_oak_planks', name: 'Pale Oak', color: 'f7eceb', cmd: 19, log: 'vanillabackport:block/pale_oak_log', planks: 'vanillabackport:block/pale_oak_planks' },
  { id: 'snifferplus:stone_pine_planks', name: 'Stone Pine', color: 'b2997e', cmd: 20, log: 'snifferplus:block/stone_pine_log', planks: 'snifferplus:block/stone_pine_planks' }
]

ServerEvents.recipes(event => {
  // Remove existing water wheel recipes
  event.remove({output: 'create:water_wheel'})
  event.remove({output: 'create:large_water_wheel'})
  
  // Create recipes for each plank type
  plankTypes.forEach(plank => {
    // Regular Water Wheel recipe
    event.shaped(
      Item.of('create:water_wheel', {
        BlockEntityTag: {
          Material: {
            Name: plank.id
          }
        },
        display: {
          Lore: [
            '{"text":"Material: ' + plank.name + '","color":"#' + plank.color + '","italic":false}'
          ]
        },
        CustomModelData: plank.cmd
      }), 
      [
        'PPP',
        'PSP',
        'PPP'
      ], 
      {
        P: plank.id,
        S: 'create:shaft'
      }
    ).id(`brassworks:water_wheel_${plank.id.replace(':', '_')}`)
    
    // Large Water Wheel recipe (using cmd + 100 to differentiate)
    event.shaped(
      Item.of('create:large_water_wheel', {
        BlockEntityTag: {
          Material: {
            Name: plank.id
          }
        },
        display: {
          Lore: [
            '{"text":"Material: ' + plank.name + '","color":"#' + plank.color + '","italic":false}'
          ]
        },
        CustomModelData: plank.cmd + 100
      }), 
      [
        'PPP',
        'PWP',
        'PPP'
      ], 
      {
        P: plank.id,
        W: 'create:water_wheel'
      }
    ).id(`brassworks:large_water_wheel_${plank.id.replace(':', '_')}`)
  })
})

PlayerEvents.inventoryChanged(event => {
  try {
    // Get the item that triggered the inventory change
    let changedItem = event.getItem();

    // Exit early if the changed item is not a water wheel or large water wheel
    if (!changedItem || (changedItem.id !== 'create:water_wheel' && changedItem.id !== 'create:large_water_wheel')) {
      return;
    }

    let player = event.player;
    let inventory = player.getInventory();

    // Iterate through the player's inventory
    for (let i = 0; i < 36; i++) {
      let item = inventory.getStackInSlot(i);

      if (item.isEmpty()) continue;

      // Check if the item is a water wheel or large water wheel
      if (item.id !== 'create:water_wheel' && item.id !== 'create:large_water_wheel') continue;

      // Check if the item has already been processed
      if (item.nbt && item.nbt.CustomModelData && item.nbt.CustomModelData !== 420) continue;

      // Check for material data
      let materialId = null;
      if (item.nbt?.BlockEntityTag?.Material?.Name) {
        materialId = item.nbt.BlockEntityTag.Material.Name.toString();
      }

      if (!materialId) continue;

      let foundPlankType = plankTypes.find(p => p.id === materialId);
      if (!foundPlankType) continue;

      let newCmd = item.id === 'create:large_water_wheel' ? foundPlankType.cmd + 100 : foundPlankType.cmd;

      // Check for existing items with the same NBT that can stack
      let existingSlot = -1;
      for (let j = 0; j < 36; j++) {
        if (j === i) continue; // Skip the current slot
        let existingItem = inventory.getStackInSlot(j);

        if (existingItem.isEmpty()) continue;
        if (existingItem.id !== item.id) continue;

        if (existingItem.nbt?.CustomModelData === newCmd && existingItem.getCount() < 64) {
          existingSlot = j;
          break;
        }
      }

      if (existingSlot !== -1) {
        // Add to existing stack without exceeding 64
        let existingItem = inventory.getStackInSlot(existingSlot);
        let totalCount = existingItem.getCount() + item.getCount();

        if (totalCount > 64) {
          let remainingCount = totalCount - 64;
          existingItem.setCount(64);
          inventory.setStackInSlot(existingSlot, existingItem);

          // Update the original item with the remaining count
          item.setCount(remainingCount);
          inventory.setStackInSlot(i, item);
        } else {
          existingItem.setCount(totalCount);
          inventory.setStackInSlot(existingSlot, existingItem);

          // Remove the original item
          item.setCount(0);
        }
      } else {
        // Update the item's NBT
        item.nbt = {
          BlockEntityTag: {
            Material: {
              Name: materialId
            }
          },
          CustomModelData: newCmd,
          display: {
            Lore: [
              `{"text":"Material: ${foundPlankType.name}","color":"#${foundPlankType.color}","italic":false}`
            ]
          }
        };
        inventory.setStackInSlot(i, item);
      }
    }
  } catch (error) {
    console.error(`Error in inventoryChanged event: ${error}`);
  }
});

