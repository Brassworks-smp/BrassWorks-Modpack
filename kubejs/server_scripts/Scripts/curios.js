// File: kubejs/server_scripts/tank_belt_slots.js

// Tag the Create S&A tanks to be compatible with belt slots
ServerEvents.tags('item', event => {
    // Add all size variants of filling tanks to the belt tag
    ['small', 'medium', 'large'].forEach(size => {
      event.add('curios:belt', `create_sa:${size}_filling_tank`);
      event.add('curios:charm', `create_sa:${size}_filling_tank`);
    });

    
    // Add all size variants of fueling tanks to the belt tag
    ['small', 'medium', 'large'].forEach(size => {
      event.add('curios:belt', `create_sa:${size}_fueling_tank`);
      event.add('curios:charm', `create_sa:${size}_fueling_tank`);
    });
  });
  
