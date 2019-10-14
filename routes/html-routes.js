// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    //Route: loads main.html to display the main page;
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/main.html"));
    });
    
    //Route: loads user.html to display the user home page;
    app.get("/:username", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/user.html"));
    });

    //Route： loads add.html to create new post.
    app.get("/add/:username", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/add.html"));
    });

    app.get("/collection/:id", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/collection.html"));
    });
};