var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    //Route: loads main.html to display the main page;
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    //Route: loads user.html to display the user home page;
    app.get("/:username", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/userIndex.html"));
    });

    //Route： loads add.html to create new post.
    app.get("/add/:username", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/makeCollexions.html"));
    });

    app.get("/collection/:id", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/viewGlobal.html"));
    });
};