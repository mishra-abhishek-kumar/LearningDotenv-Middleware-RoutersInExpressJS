const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        id: 1234,
        title: "First post",
        description: "Nothing like anything"
    })
})

router.get('/all', (req, res) => {
    res.json(
        [
            {
                title: "1st Post"
            },
            {
                title: "2nd Post"
            }
        ]
    )
})

module.exports = router;