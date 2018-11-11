const router = require('express').Router();
const ProfileController = require('../controllers/ProfileController');

router.get('/', ProfileController.find);
//router.get('/logout', ProfileController.logout);

module.exports = router;