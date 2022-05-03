/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('customer' , (table) => {
        table.string('fnm').notNullable();
        table.string('lnm').notNullable();
        table.integer('phone').notNullable();

    }) 
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('customer');
  
};
