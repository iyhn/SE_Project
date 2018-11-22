const connection = require('../db');


task = {}

task.findAll = () => (
    new Promise ((resolve, reject) => {
        connection.query('SELECT * FROM task,user_info WHERE task.createdUserID=user_info.id', (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

task.search = (keyword) => (
    new Promise ((resolve, reject) => {
        connection.query('SELECT * FROM task WHERE (topic LIKE ?)', '%'+keyword+'%' , (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

task.findWithID = (id) => (
    new Promise ((resolve, reject) => {
        connection.query('SELECT * FROM task WHERE taskID = ?', id , (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

task.findWithCreatedUser = (id) => (
    new Promise ((resolve, reject) => {
        connection.query('SELECT * FROM task WHERE createdUserID = ?', id , (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

task.add = (body) => (
    new Promise ((resolve, reject) => {
        connection.query('INSERT INTO task (createdUserID, topic, description, wage, position) values (?,?,?,?,?)',[body.userID,body.topic,body.description,body.wage,body.position], (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

module.exports = task;