const jwt = require('jsonwebtoken');

exports.signin = (req, res, next) => {
    if(req.body.username === '123'){
        if(req.body.password === '123'){
            const token = jwt.sign({
                username: req.body.username
            }, 'secret', {expiresIn : 60})
            console.log(token)
            res.json({token});
            
        }else {
            res.status(401).json('Incorect Password')
        }
    }else {
        res.status(404).json('user not found')
    }
};