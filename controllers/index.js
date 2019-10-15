var express = require('express');
var router = express.Router();
var authRoutes = require('./authorization');
var apiRoutes = require('./api-routes')
var htmlRoutes = require('./html-routes')

router.use('/', htmlRoutes)
router.use('/api', apiRoutes)
router.use('/auth', authRoutes)

module.exports = router;