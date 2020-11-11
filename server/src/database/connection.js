const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.DEVELOPMENT !== '1' ? configuration.production : configuration.development;

const connection = knex(config);

module.exports = connection;