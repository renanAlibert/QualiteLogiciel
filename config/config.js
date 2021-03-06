
module.exports = {
    port: 3000,
    development: {
      dialect: "sqlite",
      storage: "./db.development.sqlite"
    },
    test: {
      dialect: "sqlite",
      storage: ":memory:"
    },
    apiVersion: "1.0.0",
    production: {
     /* username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
      dialect: 'mysql',
      use_env_variable: 'DATABASE_URL'*/
      username: "postgres",
      password: "mysecretpassword",
      database: "postgres",
      host: "postgres",
      dialect: 'postgres',
    }
};