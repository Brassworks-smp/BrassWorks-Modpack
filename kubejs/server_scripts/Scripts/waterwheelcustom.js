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

ItemEvents.pickedUp(event => {
  try {
    let theItem = event.getItem()
    
    // Early exit with optimized water wheel check
    if (!theItem || (theItem.id !== 'create:water_wheel' && theItem.id !== 'create:large_water_wheel')) return
    
    let thePlayer = event.getPlayer()
    if (!thePlayer) return
    
    // Check if already processed
    if (theItem.nbt && theItem.nbt.CustomModelData && theItem.nbt.CustomModelData !== 420) return
    
    // Check for material data
    let materialId = null
    if (theItem.nbt?.BlockEntityTag?.Material?.Name) {
      materialId = theItem.nbt.BlockEntityTag.Material.Name.toString()
    }
    
    if (!materialId) return
    
    let foundPlankType = plankTypes.find(p => p.id === materialId)
    if (!foundPlankType) return
    
    let newCmd = theItem.id === 'create:large_water_wheel' ? foundPlankType.cmd + 100 : foundPlankType.cmd
    
    // Schedule the replacement for the next tick to ensure the item is in the inventory
    Utils.server.scheduleInTicks(1, () => {
      try {
        let inventory = thePlayer.getInventory()
        let targetSlot = -1
        let existingSlot = -1
        
        // Find the item to convert and check for existing items with same NBT
        for (let i = 0; i < 36; i++) {
          let invItem = inventory.getStackInSlot(i)
          
          if (invItem.isEmpty()) continue
          if (invItem.id !== theItem.id) continue
          
          // Check if this is the item we want to modify
          let invMaterialId = null
          if (invItem.nbt?.BlockEntityTag?.Material?.Name) {
            invMaterialId = invItem.nbt.BlockEntityTag.Material.Name.toString()
          }
          
          if (invMaterialId === materialId) {
            if (theItem.id === 'create:large_water_wheel' && (!invItem.nbt?.CustomModelData || invItem.nbt?.CustomModelData === 0)) {
              // This is an unmarked large water wheel - mark it first
              invItem.nbt = invItem.nbt || {}
              invItem.nbt.CustomModelData = 420
              targetSlot = i
            } else if (theItem.id === 'create:large_water_wheel' && invItem.nbt?.CustomModelData === 420) {
              // This is the marked large water wheel to convert
              targetSlot = i
            } else if (theItem.id === 'create:water_wheel' && (!invItem.hasNBT() || !invItem.nbt.CustomModelData)) {
              // This is the regular water wheel to convert
              targetSlot = i
            } else if (invItem.nbt?.CustomModelData === newCmd && invItem.getCount() < 64) {
              // Found existing item with same NBT that can accept more items
              existingSlot = i
            }
          }
        }
        
        if (targetSlot !== -1) {
          if (existingSlot !== -1) {
            // Add to existing stack
            let existingItem = inventory.getStackInSlot(existingSlot)
            let pickedUpCount = theItem.getCount()
            existingItem.setCount(existingItem.getCount() + pickedUpCount)
            inventory.setStackInSlot(existingSlot, existingItem)
            
            // Get the full NBT and clear the item
            let targetItem = inventory.getStackInSlot(targetSlot)
            let fullNbt = targetItem.nbt ? targetItem.nbt.toString() : ""
            let playerUuid = thePlayer.getUuid()
            
            if (theItem.id === 'create:large_water_wheel') {
              Utils.server.runCommandSilent(`execute as ${playerUuid} run clear @s ${theItem.id}{BlockEntityTag:{Material:{Name:"${materialId}"}},CustomModelData:420d} ${pickedUpCount}`)
            } else {
              Utils.server.runCommandSilent(`execute as ${playerUuid} run clear @s ${theItem.id}${fullNbt} ${pickedUpCount}`)
            }
          } else {
            // Convert the item in place
            let pickedUpCount = theItem.getCount()
            let replacementItem = Item.of(theItem.id, {
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
            })
            
            replacementItem.setCount(pickedUpCount)
            inventory.setStackInSlot(targetSlot, replacementItem)
          }
        }
      } catch (error) {
        console.error(`Error in scheduled replacement: ${error}`)
      }
    })
    //this is the most unoptimized code ever, but it works
  } catch (error) {
    console.error(`Error in pickedUp event: ${error}`)
  }
})

