const userInfo = require('../models/userInfo');

exports.find = (req, res, next) => {
    console.log(req.query.id)
    userInfo.find(req.query.id)
    .then((result)=>{
        console.log(result[0])
        res.json(JSON.parse(JSON.stringify(result[0])));
    })
    
}

exports.edit = (req,res,next) => {
    console.log(req.body)
    userInfo.edit(req.query.id,req.body)
    .then(()=>{
        userInfo.find(req.query.id)
        .then((result)=>{
            console.log(result[0])
            res.json(JSON.parse(JSON.stringify(result[0])));
        })
    }).catch((err)=>console.log(err))
}