// File: kubejs/server_scripts/createaddition_removals.js

ServerEvents.recipes(event => {
  // Simply remove ALL recipes from CreateAddition
  event.remove({ mod: 'createaddition' });
});
