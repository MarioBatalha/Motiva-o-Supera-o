
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('company').del()
    .then(function () {
      // Inserts seed entries
      return knex('company').insert([
        {
          id: 1,
          username: 'Angola cable',
          email: 'angCable20@gmail.com',
          password: 'angola123',
          checkPassword: 'angola123',
          country: 'Angola',
          nif: '558796314200'
        },
      ]);
    });
};
