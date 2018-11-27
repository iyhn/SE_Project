const userInfo = require('../models/userInfo');
const task = require('../models/task');

exports.find = (req, res, next) => {
    console.log(req.query.id)
    userInfo.find(req.query.id)
    .then((result)=>{
        task.findAccept(req.query.id)
        .then((result2)=>{
            let a = [];
            for(const i in result2){
                a.push(JSON.parse(JSON.stringify(result2[i])))
            }
            userInfo.findReview(req.query.id)
            .then((result3)=>{
                let b = [];
                let c=0;
                for(const i in result3){
                    b.push(JSON.parse(JSON.stringify(result3[i])))
                    c+=Number(result3[i].score);
                }
                if(result3.length!=0) c=c/result3.length;
                res.json({review:b,reviewScore:c,inprogress:a,...JSON.parse(JSON.stringify(result[0]))});
            })
            
        })        
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

exports.review = (req,res,next) => {
    userInfo.review(req.body)
    .then(()=>{
        task.done(req.body)
        .then(()=>{
            res.json(' ')
        })
    }).catch((err)=>console.log(err))
}