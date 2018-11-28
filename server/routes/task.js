const router = require('express').Router();
const TaskController = require('../controllers/TaskController');

router.get('/all', TaskController.findAll);
router.get('/', TaskController.findID);
router.post('/', TaskController.add);
router.get('/search', TaskController.search);
router.post('/like', TaskController.like);
router.post('/unlike', TaskController.unlike);
router.post('/accept', TaskController.accept)
router.post('/delete', TaskController.delete)
//router.get('/logout', ProfileController.logout);

module.exports = router;