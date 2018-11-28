const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'chaisitsak',
    database : 'cpj',
    port : '3306'
  });

  for(var i = 0 ; i<10000 ; i++){
    connection.query('INSERT INTO test (data) values (SHA2(?,512))',i, (error,result) => {
    })
  }
  
