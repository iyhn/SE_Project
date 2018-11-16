const connection = require('../db');


user = {}

user.find = (username) => (
    new Promise ((resolve, reject) => {
        connection.query('SELECT * FROM user WHERE username = ?', username , (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

user.add = (username,password) => (
    new Promise ((resolve, reject) => {
        connection.query('INSERT INTO user (username, password) values (?,?)',[username,password], (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

module.exports = user;