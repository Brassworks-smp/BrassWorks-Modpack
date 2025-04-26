// File: kubejs/client_scripts/hide_createaddition.js

// Items from Create Addition to keep
const keepItems = [
    'createaddition:biomass',
    'createaddition:biomass_pellet',
    'createaddition:barbed_wire',
    'createaddition:seed_oil_bucket',
    'createaddition:bioethanol_bucket',
    'createaddition:straw',
    'createaddition:biomass_pellet_block'
];

// Fluids from Create Addition to keep
const keepFluids = [
    'createaddition:bioethanol',
    'createaddition:seed_oil'
];

// Hide items from JEI
JEIEvents.hideItems(event => {
    // Get all items from createaddition
    Ingredient.of('@createaddition').getStacks().forEach(stack => {
        const id = stack.getId();
        if (!keepItems.includes(id)) {
            event.hide(id);
        }
    });
});

// Hide fluids from JEI
JEIEvents.hideFluids(event => {
    // This is harder to do with fluids, but we can still use pattern matching
    event.hide(/createaddition:.+/);
    
    // Re-add the fluids we want to keep
    keepFluids.forEach(fluid => {
        event.show(fluid);
    });
});