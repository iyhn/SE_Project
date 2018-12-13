const connection = require('../db');
const moment = require('moment')

task = {}

task.find = (id) => {
    return new Promise ((resolve, reject) => {
        connection.query('SELECT * FROM task,user_info WHERE task.createdUserID=user_info.id AND taskID= ?',id, (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
}

task.delete = (body) => (
    new Promise ((resolve, reject) => {
        connection.query('DELETE FROM task WHERE taskID=?',body.taskID, (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

task.getAccepted = (body) => (
    new Promise ((resolve, reject) => {
        connection.query('SELECT inprogress.*,user_info.firstname,user_info.lastname,user_info.picture,user_info.id FROM inprogress,user_info WHERE inprogress.taskID=? AND user_info.id = inprogress.userID',body.taskID, (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)
 
task.findAll = () => (
    new Promise ((resolve, reject) => {
        connection.query('SELECT * FROM task,user_info WHERE task.createdUserID=user_info.id AND state=0 ORDER BY taskID DESC', (error,result) => {
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
        connection.query('SELECT task_interest.*,user_info.firstname,user_info.lastname,user_info.picture,user_info.id FROM task_interest,user_info WHERE taskID=? AND task_interest.userID=user_info.id',body.taskID, (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

task.findAccept = (id) => (
    new Promise ((resolve, reject) => {
        connection.query('SELECT * FROM inprogress,task,user_info WHERE inprogress.taskID=task.taskID AND createdUserID=? AND inprogress.state=0 AND inprogress.userID=id',id, (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

task.accept = (body) => (
    new Promise ((resolve, reject) => {
        connection.query('UPDATE task SET state=1 WHERE taskID=?',body.taskID, (error,result) => {
            if (error) return reject(error);
            connection.query('INSERT INTO inprogress VALUES(?,?,NOW(),0)',[body.id,body.taskID], (error,result) => {
                if (error) return reject(error);
                resolve(result);
            })     
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

task.done = (body) => (
    new Promise ((resolve, reject) => {
        connection.query('UPDATE inprogress SET state=1 WHERE taskID=?',body.taskID, (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

module.exports = task;