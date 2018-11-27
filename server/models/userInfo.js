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

userInfo.review = (body) => (
    new Promise ((resolve, reject) => {
        connection.query('INSERT INTO review (userID,score,description,reviewerID,reviewDate,taskID) values(?,?,?,?,NOW(),?)', [body.userID,body.score,body.description,body.reviewerID,body.taskID] , (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

userInfo.findReview = (id) => (
    new Promise ((resolve, reject) => {
        connection.query('SELECT review.*,user_info.*,task.topic,task.description as taskDes, task.wage, task.position FROM review,user_info,task WHERE userID=? and reviewerID=id and task.taskID=review.taskID', id , (error,result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
)

module.exports = userInfo;