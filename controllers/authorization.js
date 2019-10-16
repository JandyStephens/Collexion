var express = require('express');
var router = express.Router();
var db = require('../models');
const bcrypt = require('bcrypt');

router.get('/secret', function (req, res) {
    console.log("This is the request from /secret:", req);

    if (req.session.user) {
        res.render('securepage', req.session.user);
    } else {
        console.log('/secret pg route');

        res.send('You must log in to access this page.')
    }
})

router.get('/allUsers', function (req, res) {
    db.Collector.findAll().then(function (users) {
        res.json(users);
    })
})

router.get('/signup', function (req, res) {
    res.render('signup');
})

router.post('/signup', function (req, res) {
    console.log(req.body)
    db.Collector.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(function (newCollector) {
        console.log(newCollector)
        res.json(newCollector);
    })
})

//loads login form
router.get('/login', function (req, res) {
    res.render('login')
})

//route for user login
router.post('/login', function (req, res) {
    db.Collector.findOne({
        where: {
            name: req.body.name
        }
    }).then(function (dbCollector) {
        //compares password send in req.body to one in database, will return true if matched.
        if (dbCollector && req.body.password === dbCollector.password) {
            //create new session property "user", set equal to logged in user
            req.session.user = dbCollector;
            delete req.session.error
        }
        else {
            //delete existing user, add error
            req.session.user = false;
            req.session.error = 'Authorization failed.'
        }
        res.json(req.session);
    })
})


// $('.sign-out-btn').click(function (event) {
//     event.preventDefault;
router.get('/logout', function (req, res) {
    //delete session user, logging you out
    req.session.destroy(function () {
        res.render('index')
    })
})
// })

//developer route to see all the session variables.
router.get('/readsessions', function (req, res) {
    res.json(req.session);
})

module.exports = router