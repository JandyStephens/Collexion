// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();

var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
//TODO:Is this necessary???
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "public/main.html"));
});

app.get("api/collections",function(req, res) {
    //TODO: Display all collections;
});

app.get("/api/category/:collection_id", function(req, res) {
    var chosen = req.params.collection_id;
    //TODO: Display all collections of certain category;
});

app.get("/api/user/:collection_id", function(req, res) {
    var chosen = req.params.collection_id;    
    //TODO: Display all collections of certain user;
});

app.get("/api/keyword/:character", function(req, res) {
    //TODO: Display all collections whose title includes keyword;
});


// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
