const router = require('express').Router();
const { getAllPost, getPost } = require('../controllers/post');


router.get('/', getPost)
router.get('/all', getAllPost)

module.exports = router;