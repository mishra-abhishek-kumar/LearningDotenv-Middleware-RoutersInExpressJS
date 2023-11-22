const router = require('express').Router();
const { loginController, signupController } = require('../controllers/auth');

router.get('/signup', signupController);
router.get('/login', loginController);

module.exports = router;