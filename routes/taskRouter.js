const taskController = require('../controllers/taskController')
const router = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/createTask', authMiddleware, taskController.createTask)

router.get('/viewAllTask', authMiddleware, taskController.viewAllTask)

router.get('/:id', authMiddleware, taskController.viewOneTask)

router.put('/:id', authMiddleware, taskController.updateTask)

router.delete('/:id', authMiddleware, taskController.deleteTask)




module.exports = router
