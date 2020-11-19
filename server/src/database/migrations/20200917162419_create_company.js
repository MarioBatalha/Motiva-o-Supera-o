
exports.up = function(knex) {
    return knex.schema.createTable('company', function(table) {
        table.string('id');
        table.string('firstname').notNullable();
        table.string('nickname').notNullable();
        table.string('username').notNullable().primary();;
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('checkPassword').notNullable();
        table.string('country').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('company');
};
