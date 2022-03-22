const databaseConnection = require("./connection.config");

exports.connectToDB = async () => {
    try {
        await databaseConnection.authenticate();
        console.log('Connection has been established successfully!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}