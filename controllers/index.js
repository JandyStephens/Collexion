var express = require('express');
var router = express.Router();
var authRoutes = require('./authorization');
var apiRoutes = require('./api-routes')
var htmlRoutes = require('./html-routes')

router.use('/auth', authRoutes)
router.use('/api', apiRoutes)
router.use('/', htmlRoutes)

module.exports = router;