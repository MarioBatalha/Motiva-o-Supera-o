
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('company').del()
    .then(function () {
      // Inserts seed entries
      return knex('company').insert([
        {
          id: 1,
          username: 'kuend Digital',
          email: 'kuenda20@gmail.com',
          password: 'kuenda20',
          checkPassword: 'angolakuenda20',
          country: 'Angola',
          nif: '5587963142'
        },
      ]);
    });
};
