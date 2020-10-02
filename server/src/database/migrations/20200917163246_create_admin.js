
exports.up = function(knex) {
  return knex.schema.createTable('admin', function (table) {
      table.increments();
      table.string('username').notNullable();
      table.string('email').notNullable();
      table.string('cargo').notNullable();
      table.string('password').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('admin');
  
};
