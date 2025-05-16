// File: kubejs/client_scripts/hide_additional_items.js

// Additional items to hide from JEI/EMI
const additionalItemsToHide = [
    'createaddition:cake_base',
    'createaddition:cake_base_baked',
    'numismatics:creative_vendor',
    'numismatics:andesite_depositor',
    'numismatics:brass_depositor',
    'numismatics:vendor'
];

// Hide these items from JEI
JEIEvents.hideItems(event => {
    // Hide all the specified items
    additionalItemsToHide.forEach(item => {
        event.hide(item);
    });
    event.hide('#forge:hidden')
});


// Hide these items from EMI if it's available
// This approach works with multiple recipe viewers
ClientEvents.tick(event => {
    // Only run this code once at startup
    if (event.tick === 20) {
        // Check if EMI is loaded
        if (Platform.isModLoaded('emi')) {
            // Try to use EMI's API to hide items
            try {
                // For EMI compatibility
                additionalItemsToHide.forEach(item => {
                    // Use EMI's API if available
                    global.emi.api.hideItem(item);
                });
                global.emi.api.hideItem('#forge:hidden')
                global.emi.api.hideFluid('#forge:hidden')
            } catch (e) {
                // Fallback if EMI's API isn't available
                console.log("EMI API not available, items may still show in EMI");
                console.warn('EMI API not available; forge:hidden may still appear')
            }
        }
    }
});

// Also remove recipes for these items
ServerEvents.recipes(event => {
    additionalItemsToHide.forEach(item => {
        event.remove({output: item});
    });
    event.remove({ output: '#forge:hidden' })
});
