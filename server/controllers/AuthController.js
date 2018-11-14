const jwt = require('jsonwebtoken');
const user = require('../models/user');

exports.signin = (req, res, next) => {
    user.find(req.body.username)
    .then((result)=>{
        if(result.length > 0){
            if(req.body.password === result[0].password){
                const token = jwt.sign({
                    id : result[0].id,
                    username: req.body.username
                }, 'secret', {expiresIn : 120})
                console.log(token)
                res.json({token});
            }else {
                res.status(401).json("Wrong Password")
            }
           
        }else {
            console.log('asdasdsa')
            res.status(401).json('Incorect User or Password')
        }
    })
    // if(req.body.username === '123'){
    //     if(req.body.password === '123'){
    //         const token = jwt.sign({
    //             username: req.body.username
    //         }, 'secret', {expiresIn : 60})
    //         console.log(token)
    //         res.json({token});
            
    //     }else {
    //         res.status(401).json('Incorect Password')
    //     }
    // }else {
    //     res.status(404).json('user not found')
    // }
};

exports.signup = (req, res, next) => {
    user.find(req.body.username)
    .then((result) => {
        if(result.length > 0){
            res.status(404).json('Username already exist')
        }else {
            user.add(req.body)
             .then(()=>{
            const token = jwt.sign({
             username: req.body.username
        }, 'secret', {expiresIn : 120})
        console.log(token)
        res.json({token});
    })
    .catch((err)=>{
        res.status(404).json(err.code);
    })
        }
    })
    
}