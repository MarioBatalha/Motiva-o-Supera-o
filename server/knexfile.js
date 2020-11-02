// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'duo69',
      database: 'contentribe'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/tes.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'contentribe',
      user: 'postgres',
      password: 'duo69'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      type: 'postgres',
      port: '5432',
      host:'ec2-107-22-241-205.compute-1.amazonaws.com',
      user: 'nktffycamtpbty',
      password: '306b02e6afde4b31c7b5015a0cee94888ba425fb520220e7bee4cbcbe81c7648',
      database: 'df2j4n68b226b5',
      url: process.env.DATABASE_URL
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    },
    useNullAsDefault: true,
  }

};
