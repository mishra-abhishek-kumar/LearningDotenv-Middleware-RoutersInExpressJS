const router = require('express').Router();

router.get('/login', (req, res) => {
    res.send("This is for login");
});

router.get('/signup', (req, res) => {
    res.send("This is for signup");
});

module.exports = router;