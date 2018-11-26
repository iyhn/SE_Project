const connection = require('../db');
const moment = require('moment')

task = {}

task.findAll = () => (
    new Promise ((resolve, reject) => {
        connection.query('SELECT * FROM task,user_info WHERE task.createdUserID=user_info.id', (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

task.like = (body) => (
    new Promise ((resolve, reject) => {
        connection.query('INSERT INTO task_interest VALUES (?,?,NOW())',[body.id,body.taskID], (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

task.unlike = (body) => (
    new Promise ((resolve, reject) => {
        connection.query('DELETE FROM task_interest WHERE userID=? AND taskID=?',[body.id,body.taskID], (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

task.countLike = (body) => (
    new Promise ((resolve, reject) => {
        connection.query('SELECT * FROM task_interest WHERE taskID=?',body.taskID, (error,result) => {
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