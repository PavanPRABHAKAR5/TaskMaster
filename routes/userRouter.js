const userController = require('../controllers/userController');

const router = require('express').Router();



router.post('/registerUser', userController.registerUser);

router.post('/loginUser',userController.loginUser)




module.exports = router;