/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('type_users').del()
  
  await knex('type_users').insert([
    {
      description: 'admin'
    },
    {
       
      description: 'Secretary'
    },
    {
      description: 'financial' 
      
    },
    {
      id_permission: 'id'
    }
  ]);
};
