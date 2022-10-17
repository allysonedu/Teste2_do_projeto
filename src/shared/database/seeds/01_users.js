/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()

  await knex('user').insert([
   {
    name: 'Administrador',
    email: 'allysoneduu@gmail.com',
    password:123456,
    whatsapp: 199999999,
    username: 'admin',
    type: 'admin'
    
   }
  ]);
  await knex('user').insert([
    {
      description:'admin',
      type: 1
    
    },
    {
      description: 'secretaria',
      type: 2
    },
    {
      description:'financeiro',
      type: 3

    }
  ]);
  await knex('user_permissions').insert([
    {
      id_user:1,
      id_permission:1
    },
  ]);
};
