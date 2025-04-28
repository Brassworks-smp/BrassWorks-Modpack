// STARTUP SCRIPT
// File: kubejs/startup_scripts/brassworksdeco.js

// List of stone types for cut variants
const STONE_TYPES = [
    'andesite', 'asurine', 'calcite', 'crimsite', 'deepslate',
    'diorite', 'dripstone', 'granite', 'limestone', 'ochrum',
    'scorchia', 'scoria', 'tuff', 'veridium'
  ];
  
  // List of cut stone styles
  const CUT_STONE_STYLES = [
    'polished',
    'small_brick'
  ];
  
  // Map of Create mod block names to check if they exist
  const CREATE_BLOCKS = {};
  
  // Rose quartz variants
  const ROSE_QUARTZ_VARIANTS = [
    'bricks',
    'chiseled',
    'crushed',
    'polished_block',
    'squares',
    'tiles'
  ];
  
  // Execute on startup event
  StartupEvents.registry('block', event => {
    console.log('Registering Brassworks stone blocks...');
  
    // Populate CREATE_BLOCKS map from the provided list
    populateCreateBlocksMap();
  
    // Register stone variants
    STONE_TYPES.forEach(stone => {
      CUT_STONE_STYLES.forEach(style => {
        const createBlockName = `create:${style === 'small_brick' ? 'small_' : ''}${stone}_${style === 'small_brick' ? 'bricks' : style === 'polished' ? 'cut_polished' : 'cut'}`;
        const hasCreateVariant = CREATE_BLOCKS[createBlockName] === true;
  
        // Only register non-connecting variant for non-polished, non-small_brick styles
        if (style !== 'polished' && style !== 'small_brick' && !hasCreateVariant) {
          const regularId = `brassworks:${stone}_cut_${style}`;
          event.create(regularId)
            .displayName(`${capitalizeFirstLetter(stone)} Cut ${capitalizeFirstLetter(style.replace('_', ' '))}`)
            .soundType('stone')
            .mapColor('stone')
            .hardness(1.5)
            .resistance(6.0)
            .tagBlock(`brassworks:${stone}_cut`)
            .tagBlock(`brassworks:cut_${style}`)
            .tagBlock('brassworks:cut_stone')
            .textureAll(`brassworks:block/${stone}_cut_${style}`);
        }
  
        // Always register connecting variant
        const connectingId = `brassworks:${stone}_cut_${style}_connecting`;
        event.create(connectingId)
          .displayName(`${capitalizeFirstLetter(stone)} Cut ${capitalizeFirstLetter(style.replace('_', ' '))} (Connecting)`)
          .soundType('stone')
          .mapColor('stone')
          .hardness(1.5)
          .resistance(6.0)
          .tagBlock(`brassworks:${stone}_cut`)
          .tagBlock(`brassworks:cut_${style}`)
          .tagBlock('brassworks:cut_stone')
          .textureAll(`brassworks:block/${stone}_cut_${style}`);
      });
    });
  
    // Register rose quartz variants (skip non-connecting tiles)
    ROSE_QUARTZ_VARIANTS.forEach(variant => {
      // Regular variant (skip tiles)
      if (variant !== 'tiles') {
        const regularId = `brassworks:rose_quartz_${variant}`;
        event.create(regularId)
          .displayName(`Rose Quartz ${variant.split('_').map(capitalizeFirstLetter).join(' ')}`)
          .soundType('stone')
          .mapColor('quartz')
          .hardness(1.5)
          .resistance(6.0)
          .tagBlock('brassworks:rose_quartz')
          .textureAll(`brassworks:block/rose_quartz_${variant}`);
      }
  
      // Always register connecting variant
      const connectingId = `brassworks:rose_quartz_${variant}_connecting`;
      event.create(connectingId)
        .displayName(`Rose Quartz ${variant.split('_').map(capitalizeFirstLetter).join(' ')} (Connecting)`)
        .soundType('stone')
        .mapColor('quartz')
        .hardness(1.5)
        .resistance(6.0)
        .tagBlock('brassworks:rose_quartz_connecting')
        .textureAll(`brassworks:block/rose_quartz_${variant}`);
    });
  
    console.log('Brassworks stone blocks registered successfully!');
  });
  
  // Helper function to capitalize the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // Populate the CREATE_BLOCKS map with blocks from the Create mod
  function populateCreateBlocksMap() {
    const createBlockIds = [
      'create:cut_andesite',
      'create:polished_cut_andesite',
      'create:small_andesite_bricks',
      // ... other variants omitted for brevity
      'create:small_veridium_bricks'
    ];
    createBlockIds.forEach(block => {
      CREATE_BLOCKS[block] = true;
    });
  }
  