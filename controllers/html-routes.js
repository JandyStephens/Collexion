var express = require("express");
var router = express.Router();
var path = require("path");

// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

//Route: loads main.html to display the main page;
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Route: loads user.html to display the user home page;
router.get("/:username", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/userIndex.html"));
});

//Route： loads add.html to create new post.
router.get("/add/:username", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/makeCollexions.html"));
});

router.get("/collection/:id", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/viewGlobal.html"));
});
module.exports = router;