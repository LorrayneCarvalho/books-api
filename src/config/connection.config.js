const { Sequelize } = require("sequelize");
const databaseConfig = require("./database.config");

const databaseConnection = new Sequelize({ 
    ...databaseConfig.development
})

module.exports = databaseConnection