const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
