const router = require('express').Router();
const auth = require('./auth');
const profile = require('./profile');
const jwt = require('jsonwebtoken');

const check = (req,res,next) => {
    let token = req.headers.authorization.split(' ')[1]
    console.log(token)
    try{
        let status = jwt.verify(token, 'secret')
        profile(req,res,next);
    } catch (err) {
        console.log(err)
        res.status(401).json(err.message);
    }
    
}

router.use('/auth', auth);
router.use('/profile', check)

module.exports = router;