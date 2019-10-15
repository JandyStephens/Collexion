var express = require("express");
var router = express.Router();

router.get("/collections", function (req, res) {
    res.json(collections);
    //TODO: Display all collections;
});

router.get("/category/:collection_id", function (req, res) {
    var chosen = req.params.collection_id;

    //TODO: Display all collections of certain category;
});

router.get("/user/:collection_id", function (req, res) {
    var chosen = req.params.collection_id;
    //TODO: Display all collections of certain user;
});

router.get("/keyword/:keyword", function (req, res) {
    var keyword = req.params.keyword;
    //TODO: Display all collections whose title includes keyword;
});
module.exports = router;