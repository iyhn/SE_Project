const connection = require('../db');

connection.connect();

user = {}

user.find = (username) => (
    new Promise ((resolve, reject) => {
        connection.query('SELECT * FROM user WHERE username = ?', username , (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

user.add = (body) => (
    new Promise ((resolve, reject) => {
        connection.query('INSERT INTO user (username, password) values (?,?)',[body.username,body.password], (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

module.exports = user;