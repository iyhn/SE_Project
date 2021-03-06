const router = require('express').Router();
const auth = require('./auth');
const profile = require('./profile');
const task = require('./task');
const jwt = require('jsonwebtoken');

const check = (req,res,next) => {
    let token = req.headers.authorization.split(' ')[1]
    try{
        let status = jwt.verify(token, 'secret')
        profile(req,res,next);
    } catch (err) {
        res.status(401).json(err.message);
    }
    
}

const checkT = (req,res,next) => {
    let token = req.headers.authorization.split(' ')[1]
    try{
        let status = jwt.verify(token, 'secret')
        task(req,res,next);
    } catch (err) {
        res.status(401).json(err.message);
    }
    //asdasdas
}

router.use('/auth', auth);
router.use('/profile', check)
router.use('/task', checkT)

module.exports = router;