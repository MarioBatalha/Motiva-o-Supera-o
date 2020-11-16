
exports.up = function(knex) {
    return knex.schema.createTable('request', function (table){
        table.increments();
        
        table.string('title').notNullable();
        table.string('category').notNullable();
        table.string('lifetime').notNullable();
        table.string('description', 2000).notNullable();
        table.decimal('budget').notNullable();
        table.string('promotionalCode').notNullable();

        table.string('company_id').notNullable();

        table.foreign('company_id').references('id').inTable('company');
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('request');
  };
  