const { Pool, Client } = require('pg');
module.exports.getMySQLClient = function () {
    client = getMySQLClient();
    return client;
}
function getMySQLClient() {
    try {
        const client = new Client({
            user:  'root',
            host:  'localhost',
            database:  'eworker',
            password:  '',
            port:  90
        });
        return client;
    } catch (err) {
        console.log(err);
    }
}