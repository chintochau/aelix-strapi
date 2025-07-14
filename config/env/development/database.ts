module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      database: 'strapidb',
      user: 'strapiuser',
      password: 'Aa31093066',
      ssl: false,
    },
    debug: false,
  },
});
