const router = require('express').Router();
const AuthController = require('../controllers/AuthController');

router.post('/login', AuthController.signin);
router.post('/signup', AuthController.signup);
//router.get('/logout', AuthController.logout);

module.exports = router;