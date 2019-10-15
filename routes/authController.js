var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json("JANDY RAWR!!!!!!")
})

module.exports = router;