/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('type_users').del()
  
  await knex('type_users').insert([
    
    {description: 'admin',
     user: 'id_permission'

  },

    {description: 'Secretary',
     user: 'id_permission' 

  },
    
    {description: 'financial',
     user: 'id_permission'

  }
  ]);
};
