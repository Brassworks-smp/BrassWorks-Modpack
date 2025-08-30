// ServerEvents.recipes(event => {
//   //create oxidation recipes for the custom copper stuff cuz i was too lazy to put it in the mod, i fucking hate json recipes.

//   const honeycombBlock = 'minecraft:honeycomb_block'
//   const stages = ['','exposed_','weathered_','oxidized_']
//   const water = Fluid.of('minecraft:water', 250)
  
//   const types = [
//     'chiseled_copper','copper_grate','copper_door','copper_trapdoor',
//     'copper_bulb','copper_lantern', 'copper_chain'
//   ]
//   stages.slice(0, -1).forEach((stage, i) => {
//     types.forEach(type => {
//       const input = `brassworkscopper:${stage}${type}`
//       const output = `brassworkscopper:${stages[i+1]}${type}`

//       if (Item.exists(input) && Item.exists(output)) {
//         event.recipes.createFilling(output, [input, water])
//       }
//     })
//   })
  
//   types.forEach(type => {
//     stages.forEach(stage => {
//       const input = `brassworkscopper:${stage}${type}`
//       const output = `brassworkscopper:waxed_${stage}${type}`
  
//       if (Item.exists(input) && Item.exists(output)) {
//         event.recipes.createDeploying(output, [input, honeycombBlock]).keepHeldItem()
//       }
//     })
//   })
// })


