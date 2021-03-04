const Sequelize = require('sequelize');
let dbhost = 'localhost';
//  MYSQL
let dbname = 'eworker'; //MYSQL
let dbuser = 'root'; //MYSQL
let dbpassword=''; //MYSQL
let dbport='3306';
module.exports.Sequelize = Sequelize;
let conn = new Sequelize(dbname, dbuser, dbpassword, {
    host: dbhost,
    port: dbport,
    dialect:'mysql',
    logging: false,
    omitNull: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
test();
async function test() {
    try {
        await conn.authenticate();
        console.log('Connection is good');
    } catch (err) {
        console.log('Failed to get a connection');
    }
}
module.exports.sequelize = conn;
