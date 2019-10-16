// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var router = express.Router();
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require("./config/config.json")[env]
var session = require('express');
require('dotenv').config();
var session = require("express-session");

// console.log(config);


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// require('dotenv').config();
var allRoutes = require('./controllers');

// Requiring our models for syncing
//TODO: sequelize things....
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory will live on front end
app.use(express.static("public"));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

//tied to login auth credentials
// console.log("print process env", process.env);
//TODO:Jandy 
app.use(session({ secret: "process.env.SESSION_SECRET", resave: true, saveUninitialized: true }));

app.use('/', allRoutes);

app.get('/', function (req, res) {
    res.render('index')
})

// require("./routes/collector-api-routes.js")(app);

// Syncing our sequelize models and then starting our express app

db.sequelize.sync({ force: false }).then(function () {

    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
        console.log("http://localhost:" + PORT);

    });
});
