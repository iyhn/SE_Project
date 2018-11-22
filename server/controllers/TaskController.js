const task = require('../models/task');

exports.findAll = (req, res, next) => {
    console.log(req.query.id)
    task.findAll()
    .then((result)=>{
        console.log(result.length)
        let message =[];
        for(const r in result){
            // console.log(JSON.stringify(result[r]))
            message.push( JSON.parse(JSON.stringify(result[r])))
        }
        console.log(message);
        res.json(message);
    })
    
}

exports.search = (req,res,next) => {
    console.log(req.query.keyword)
    task.search(req.query.keyword)
    .then((result)=>{
        let message =[];
        for(const r in result){
            // console.log(JSON.stringify(result[r]))
            message.push( JSON.parse(JSON.stringify(result[r])))
        }
        console.log(message);
        res.json(message);
    })
}

exports.add = (req,res,next) => {

    task.add(req.body)
    .then(()=>{
        task.findAll()
        .then((result)=>{
            let message =[];
            for(const r in result){
                // console.log(JSON.stringify(result[r]))
                message.push( JSON.parse(JSON.stringify(result[r])))
            }
            console.log(message);
            res.json(message);
        })
    }).catch((err)=>console.log(err))
}