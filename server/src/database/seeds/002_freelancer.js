
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1, 
          username: 'Luimar Silva',
          email: 'luimar@gmail.com',
          password: 'luimar123',
          checkPassword: 'luimar123',
          degree: 'Graduado',
          residence: 'Angola-Luanda',
          phone: '9000000001'
        }
      ]);
    });
};
