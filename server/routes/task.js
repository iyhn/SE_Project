const router = require('express').Router();
const TaskController = require('../controllers/TaskController');

router.get('/all', TaskController.findAll);
router.post('/', TaskController.add);
router.get('/search', TaskController.search);
//router.get('/logout', ProfileController.logout);

module.exports = router;