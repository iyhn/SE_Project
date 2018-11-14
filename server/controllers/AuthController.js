const jwt = require('jsonwebtoken');
const user = require('../models/user');
const bcrypt = require('bcrypt');

exports.signin = (req, res, next) => {
    user.find(req.body.username)
    .then((result)=>{
        if(result.length > 0){
            bcrypt.compare(req.body.password, result[0].password, function(err, checked) {
                if(checked){
                    const token = jwt.sign({
                        id : result[0].id,
                        username: req.body.username
                    }, 'secret', {expiresIn : 120})
                    console.log(token)
                    res.json({token});
                }else {
                    res.status(401).json("Wrong Password")
                }
            });
        }else {
            console.log('asdasdsa')
            res.status(401).json('Incorect User or Password')
        }
    })
};

exports.signup = (req, res, next) => {
    user.find(req.body.username)
    .then((result) => {
        if(result.length > 0){
            res.status(404).json('Username already exist')
        }else {
            bcrypt.hash(req.body.password, 5 , (err,hash) => {
                user.add(req.body.username,hash)
                .then(()=>{
                const token = jwt.sign({
                username: req.body.username
                }, 'secret', {expiresIn : 120})
                console.log(token)
                res.json({token});
                })
            })
        }
    })
    .catch((err)=>{
        res.status(404).json(err.code);
    })
 
    
}