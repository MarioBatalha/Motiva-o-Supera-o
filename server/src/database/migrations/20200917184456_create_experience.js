
exports.up = function(knex) {
  return knex.schema.createTable('experience', function (table) {
      table.increments();
      
      table.string('work').notNullable();
      table.string('companyName').notNullable();
      table.string('timing').notNullable();
      table.string('country').notNullable();
      table.string('function', 100).notNullable();

      table.integer('freelancer_id').notNullable();

      table.foreign('freelancer_id').references('id').inTable('freelancer');
  })
};


exports.down = function(knex) {
  return knex.schema.dropTable('experience');
};
