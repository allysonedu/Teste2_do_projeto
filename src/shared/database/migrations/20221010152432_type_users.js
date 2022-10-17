/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('typeUsers', table => {
    table.increments('id').primary();
    table.text('description').notNullable();
    table.text('usuario').notNullable();
    table.boolean('type').notNullable();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('id').inTable('user');


  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('typeUsers');
  
};
