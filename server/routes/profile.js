const router = require('express').Router();
const ProfileController = require('../controllers/ProfileController');

router.get('/', ProfileController.find);
router.put('/', ProfileController.edit);
router.post('/review', ProfileController.review);
//router.get('/logout', ProfileController.logout);

module.exports = router;