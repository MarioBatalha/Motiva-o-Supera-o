
exports.up = function(knex) {
    return knex.schema.createTable('request', function (table){
        table.increments();
        
        table.string('title').notNullable();
        table.string('category').notNullable();
        table.string('lifetime').notNullable();
        table.string('description', 2000).notNullable();
        table.float('budget', { precision: 6 }).notNullable();
        table.string('promotionalCode').notNullable();

        table.string('company_username').notNullable();

        table.foreign('company_username').references('username').inTable('company');
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('request');
  };
  