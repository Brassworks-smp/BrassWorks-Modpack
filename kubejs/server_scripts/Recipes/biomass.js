ServerEvents.recipes(event => {
  // Register each of the custom "create:mixing" recipes
  const recipes = [
    {
      "type": "create:mixing",
      "ingredients": [
        { "tag": "forge:crops" },
        { "tag": "forge:crops" },
        { "fluidTag": "forge:plantoil", "amount": 100 }
      ],
      "results": [
        { "item": "createaddition:biomass", "count": 1 }
      ],
      "heatRequirement": "heated"
    },
    {
      "type": "create:mixing",
      "ingredients": [
        { "tag": "minecraft:flowers" },
        { "tag": "minecraft:flowers" },
        { "fluidTag": "forge:plantoil", "amount": 100 }
      ],
      "results": [
        { "item": "createaddition:biomass", "count": 1 }
      ],
      "heatRequirement": "heated"
    },
    {
      "type": "create:mixing",
      "ingredients": [
        { "item": "minecraft:honeycomb" },
        { "fluidTag": "forge:plantoil", "amount": 100 }
      ],
      "results": [
        { "item": "createaddition:biomass", "count": 1 }
      ],
      "heatRequirement": "heated"
    },
    {
      "type": "create:mixing",
      "ingredients": [
        { "tag": "minecraft:leaves" },
        { "tag": "minecraft:leaves" },
        { "tag": "minecraft:leaves" },
        { "fluidTag": "forge:plantoil", "amount": 100 }
      ],
      "results": [
        { "item": "createaddition:biomass", "count": 1 }
      ],
      "heatRequirement": "heated"
    },
    {
      "type": "create:mixing",
      "ingredients": [
        { "tag": "createaddition:plants" },
        { "tag": "createaddition:plants" },
        { "tag": "createaddition:plants" },
        { "fluidTag": "forge:plantoil", "amount": 100 }
      ],
      "results": [
        { "item": "createaddition:biomass", "count": 1 }
      ],
      "heatRequirement": "heated"
    },
    {
      "type": "create:mixing",
      "ingredients": [
        { "tag": "createaddition:plant_foods" },
        { "tag": "createaddition:plant_foods" },
        { "fluidTag": "forge:plantoil", "amount": 100 }
      ],
      "results": [
        { "item": "createaddition:biomass", "count": 1 }
      ],
      "heatRequirement": "heated"
    },
    {
      "type": "create:mixing",
      "ingredients": [
        { "tag": "minecraft:saplings" },
        { "tag": "minecraft:saplings" },
        { "tag": "minecraft:saplings" },
        { "fluidTag": "forge:plantoil", "amount": 100 }
      ],
      "results": [
        { "item": "createaddition:biomass", "count": 1 }
      ],
      "heatRequirement": "heated"
    },
    {
      "type": "create:mixing",
      "ingredients": [
        { "item": "minecraft:stick" },
        { "item": "minecraft:stick" },
        { "item": "minecraft:stick" },
        { "item": "minecraft:stick" },
        { "item": "minecraft:stick" },
        { "item": "minecraft:stick" },
        { "item": "minecraft:stick" },
        { "item": "minecraft:stick" },
        { "fluidTag": "forge:plantoil", "amount": 100 }
      ],
      "results": [
        { "item": "createaddition:biomass", "count": 1 }
      ],
      "heatRequirement": "heated"
    }
  ];

  // Loop through the recipes and register each one
  recipes.forEach(recipe => {
    event.custom(recipe);
  });
});
