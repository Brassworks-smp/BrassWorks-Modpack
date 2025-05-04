// Add a Create spouting recipe to craft Artifacts' Night Vision Goggles
ServerEvents.recipes(event => {
  // Using the KubeJS Create addon for better recipe integration
  event.recipes.createFilling(
    'artifacts:night_vision_goggles',
    [
      'create:goggles',
      Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:night_vision"})
    ]
  );
});

console.log('Night Vision Goggles Create spouting recipe loaded.');