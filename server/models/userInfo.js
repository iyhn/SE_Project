const connection = require('../db');


userInfo = {}

userInfo.find = (id) => (
    new Promise ((resolve, reject) => {
        connection.query('SELECT * FROM user_info WHERE id = ?', id , (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

userInfo.add = (id,body) => (
    new Promise ((resolve, reject) => {
        connection.query('INSERT INTO user_info values (?,?,?,?,?,?,?,?,?,?)', [id,body.firstname,body.lastname,'',body.dob,'',body.address,'',body.nationality,body.email] , (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

userInfo.edit = (id,body) => (
    new Promise ((resolve, reject) => {
        connection.query('UPDATE user_info SET firstname=?, lastname=?, dob=?, address=?, nationality=?, email=? WHERE id=?', [body.firstname,body.lastname,new Date(body.dob),body.address,body.nationality,body.email,id] , (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

module.exports = userInfo;