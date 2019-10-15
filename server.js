// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
//TODO: sequelize things....
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/html-routes.js")(app);
require("./routes/api-routes-al.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
