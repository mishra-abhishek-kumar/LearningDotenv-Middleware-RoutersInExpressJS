const router = require('express').Router();
const { getAllPost, getPost } = require('../controllers/post');
const log = require('../middlewares/Logger');


router.get('/', getPost)
router.get('/all', log, getAllPost)

module.exports = router;