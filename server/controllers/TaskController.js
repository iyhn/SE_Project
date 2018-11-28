const task = require('../models/task');
const moment = require('moment');

exports.findID = (req,res,next) => {
    task.find(req.query.id)
    .then(async(result)=>{
        message={}
        console.log(result[0].taskID)
            if(!result[0].state){
                await task.countLike(result[0])
                .then((a)=>{
                let b = []
                let c = []
                for(const i in a){
                    // console.log(a[i])
                    b.push(a[i].userID)
                    c.push({id:a[i].id,firstname:a[i].firstname,lastname:a[i].lastname,picture:a[i].picture,task:a[i].taskID})
                }
                message={like:b,likeInfo:c,...JSON.parse(JSON.stringify(result[0]))};
                }).catch((err)=>console.log(err))
            }else if (result[0].state) {
                await task.getAccepted(result[0])
                .then((a)=>{
                    let b = []
                    for(const i in a){
                        // console.log(a[i])
                        b.push({id:a[i].id,firstname:a[i].firstname,lastname:a[i].lastname,picture:a[i].picture,taskID:a[i].taskID})
                    }
                    message={acceptedInfo:b,...JSON.parse(JSON.stringify(result[0]))};
                    }).catch((err)=>console.log(err))
            }
            
            // console.log(JSON.stringify(result[r]))
            
        // console.log(message);
        res.json(message);
    }).catch((err)=>console.log(err))
}

exports.findAll = (req, res, next) => {
    //console.log(req.query.id)
    task.findAll()
    .then(async(result)=>{
        //console.log(result.length)
        let message =[];
        for(const r in result){
            await task.countLike(result[r])
            .then((a)=>{
                let b = []
                let c = []
                for(const i in a){
                    // console.log(a[i])
                    b.push(a[i].userID)
                    c.push({id:a[i].id,firstname:a[i].firstname,lastname:a[i].lastname,picture:a[i].picture,task:a[i].taskID})
                }
                message.push({like:b,likeInfo:c,...JSON.parse(JSON.stringify(result[r]))})
            })
            // console.log(JSON.stringify(result[r]))
            
        }
        // console.log(message);
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
        .then(async(result)=>{
        console.log(result.length)
        let message =[];
        for(const r in result){
            await task.countLike(result[r])
            .then((a)=>{
                let b = []
                let c = []
                for(const i in a){
                    // console.log(a[i])
                    b.push(a[i].userID)
                    c.push({id:a[i].id,firstname:a[i].firstname,lastname:a[i].lastname,picture:a[i].picture,task:a[i].taskID})
                }
                message.push({like:b,likeInfo:c,...JSON.parse(JSON.stringify(result[r]))})
            })
            // console.log(JSON.stringify(result[r]))
            
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
                let c = []
                for(const i in a){
                    // console.log(a[i])
                    b.push(a[i].userID)
                    c.push({id:a[i].id,firstname:a[i].firstname,lastname:a[i].lastname,picture:a[i].picture,task:a[i].taskID})
                }
                message.push({like:b,likeInfo:c,...JSON.parse(JSON.stringify(result[r]))})
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
                let c = []
                for(const i in a){
                    // console.log(a[i])
                    b.push(a[i].userID)
                    c.push({id:a[i].id,firstname:a[i].firstname,lastname:a[i].lastname,picture:a[i].picture,task:a[i].taskID})
                }
                message.push({like:b,likeInfo:c,...JSON.parse(JSON.stringify(result[r]))})
            })
            // console.log(JSON.stringify(result[r]))
            
        }
        console.log(message);
        res.json(message);
    })
    })
}

exports.accept = (req,res,next) => {
    console.log(req.body)
    task.accept(req.body)
    .then(()=>{
        console.log('0')
        task.findAll()
        .then(async(result)=>{
        console.log('1')
        let message =[];
        for(const r in result){
            await task.countLike(result[r])
            .then((a)=>{

                console.log('2')
                let b = []
                let c = []
                for(const i in a){
                    // console.log(a[i])
                    b.push(a[i].userID)
                    c.push({id:a[i].id,firstname:a[i].firstname,lastname:a[i].lastname,picture:a[i].picture,task:a[i].taskID})
                }
                message.push({like:b,likeInfo:c,...JSON.parse(JSON.stringify(result[r]))})
            })
            // console.log(JSON.stringify(result[r]))
            
        }
        console.log(message);
        res.json(message);
    })
    
})}

exports.delete = (req,res,next) => {
    task.delete(req.body)
    .then(()=>{
        task.findAll()
        .then(async(result)=>{
        console.log(result.length)
        let message =[];
        for(const r in result){
            await task.countLike(result[r])
            .then((a)=>{
                let b = []
                let c = []
                for(const i in a){
                    // console.log(a[i])
                    b.push(a[i].userID)
                    c.push({id:a[i].id,firstname:a[i].firstname,lastname:a[i].lastname,picture:a[i].picture,task:a[i].taskID})
                }
                message.push({like:b,likeInfo:c,...JSON.parse(JSON.stringify(result[r]))})
            })
            // console.log(JSON.stringify(result[r]))
            
        }
        console.log(message);
        res.json(message);
    })
    })
}