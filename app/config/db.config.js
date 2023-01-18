module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "1234",
  DB: "test_db_association",
  dialect: "postgres",
  PORT: "5433",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
