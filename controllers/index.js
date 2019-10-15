var express = require('express');
var router = express.Router();
var authRoutes = require('./authorization');
var apiRoutes = require('./api-routes')
var htmlRoutes = require('./html-routes')

<<<<<<< HEAD
=======
router.use('/', htmlRoutes)
router.use('/api', apiRoutes)
>>>>>>> b7b572fd98e98e31e6c16b434d90e4fb0872ecfc
router.use('/auth', authRoutes)

module.exports = router;