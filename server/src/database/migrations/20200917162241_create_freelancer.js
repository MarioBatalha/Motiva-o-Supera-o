
exports.up = function(knex) {
    return knex.schema.createTable('freelancer', function (table) {
        table.increments();
        table.string('firstName').notNullable();
        table.string('nickName').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('checkPassword').notNullable();
        table.string('degree').notNullable();
        table.string('country').notNullable();
        table.integer('phone', 12).notNullable();
       
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('freelancer');
};
