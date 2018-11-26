const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'chaisitsak',
    database : 'se_project',
    port : '3306'
  });

  module.exports = connection;