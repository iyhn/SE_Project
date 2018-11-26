const task = require('../models/task');
const moment = require('moment');

exports.findAll = (req, res, next) => {
    console.log(req.query.id)
    task.findAll()
    .then(async(result)=>{
        console.log(result.length)
        let message =[];
        for(const r in result){
            await task.countLike(result[r])
            .then((a)=>{
                let b = []
                for(const i in a){
                    console.log()
                    b.push(a[i].userID)
                }
                message.push({like:b,...JSON.parse(JSON.stringify(result[r]))})
            })
            // console.log(JSON.stringify(result[r]))
            
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

exports.like = (req,res,next) => {
    task.like(req.body)
    .then(()=>{
        task.findAll()
        .then(async(result)=>{
        console.log(result.length)
        let message =[];
        for(const r in result){
            await task.countLike(result[r])
            .then((a)=>{
                let b = []
                for(const i in a){
                    console.log()
                    b.push(a[i].userID)
                }
                message.push({like:b,...JSON.parse(JSON.stringify(result[r]))})
            })
            // console.log(JSON.stringify(result[r]))
            
        }
        console.log(message);
        res.json(message);
    })
    })
}

exports.unlike = (req,res,next) => {
    task.unlike(req.body)
    .then(()=>{
        task.findAll()
        .then(async(result)=>{
        console.log(result.length)
        let message =[];
        for(const r in result){
            await task.countLike(result[r])
            .then((a)=>{
                let b = []
                for(const i in a){
                    console.log()
                    b.push(a[i].userID)
                }
                message.push({like:b,...JSON.parse(JSON.stringify(result[r]))})
            })
            // console.log(JSON.stringify(result[r]))
            
        }
        console.log(message);
        res.json(message);
    })
    })
}