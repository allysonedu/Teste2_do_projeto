/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_admin').del()
  await knex('user_admin').insert([
    {
      nome: 'Administrador',
      email: 'allysoneduu@gmail.com',
      password:123456,
      username: ' admin ',
      id_type: 'admin'
      
    }
  ]);
};
