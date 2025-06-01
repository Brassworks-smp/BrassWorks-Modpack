// File: kubejs/server_scripts/tank_belt_slots.js

// Tag the Create S&A tanks to be compatible with belt slots
ServerEvents.tags('item', event => {
    // Add all size variants of filling tanks to the belt tag
    ['small', 'medium', 'large'].forEach(size => {
      event.add('curios:hands', `create_sa:${size}_filling_tank`);
      event.add('curios:charm', `create_sa:${size}_filling_tank`);
    });

    
    // Add all size variants of fueling tanks to the belt tag
    ['small', 'medium', 'large'].forEach(size => {
      event.add('curios:hands', `create_sa:${size}_fueling_tank`);
      event.add('curios:charm', `create_sa:${size}_fueling_tank`);
    });
  });

// Move all 'artifacts' items in #curios:hands to curios:belt with high priority
ServerEvents.tags('item', { priority: 'high' }, event => {
  // Collect all items in #curios:hands at the start
  const allHandsItems = event.get('curios:hands').getObjectIds().map(id => id.toString());
  // Filter for artifacts items
  const artifactsHands = allHandsItems.filter(id => id.startsWith('artifacts:'));
  // Add to belt
  artifactsHands.forEach(id => event.add('curios:belt', id));
  // Remove from hands
  artifactsHands.forEach(id => event.remove('curios:hands', id));
});

