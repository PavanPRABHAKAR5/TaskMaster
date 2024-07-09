const teamController = require('../controllers/teamController');
const authMiddleware = require('../middleware/authMiddleware')

const router = require('express').Router();


router.post('/createTeam', authMiddleware, teamController.createTeam);

router.post('/:id', authMiddleware, teamController.joinTeam);

module.exports = router;
