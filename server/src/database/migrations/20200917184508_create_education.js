
exports.up = function(knex) {
  return knex.schema.createTable('education', function (table) {
      table.increments();

      table.string('degree').notNullable();
      table.string('instituteName').notNullable();
      table.string('country').notNullable();
      table.string('yearConclusion').notNullable();

      table.integer('freelancer_id').notNullable();

      table.foreign('freelancer_id').references('id').inTable('freelancer');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('education')
};
