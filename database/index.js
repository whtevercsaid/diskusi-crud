const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'davidtopan',
    database: 'agentpandai',
    port: 3306
});

module.exports = conn;