var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/secret', function (req, res) {
    if (req.session.user) {
        res.render('securepage', req.session.user);
    } else {
        res.send('You must log in to access this page.')
    }
})

router.get('/allUsers', function (req, res) {
    db.Collector.findAll().then(function (users) {
        res.json(Collector);
    })
})

router.get('/signup', function (req, res) {
    res.render('signup');
})

router.post('/signup', function (req, res) {
    console.log(req.body)
    db.Collector.create({
        name: req.body.name,
        password: req.body.password
    }).then(function (newCollector) {
        console.log(newCollector)
        res.json(newCollector);

    })

})

module.exports = router