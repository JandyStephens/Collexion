//Dependencies:
//==========================================================
var express = require("express");
var router = express.Router();
var db = require("../models");



//Route: Return all the collections;
//==========================================================
router.get("/collections", function (req, res) {
    db.Collections.findAll({}).then(function (dbCollectors) {
        res.json(dbCollectors);
    });
});

//Route: Saving new collection;
//==========================================================
router.post("/collections", function (req, res) {
    db.Collections.create(req.body).then(function (dbCollections) {
        res.json(dbCollections);
    });
});

//Route: Get certain collection;
//==========================================================
router.get("/collection/:id", function (req, res) {
    // Display certain collection;
    db.Collections.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Collectors]
    }).then(function (dbCollections) {
        res.json(dbCollections);
    });
});

//Route: Delete certain collection;
//==========================================================
router.delete("/collection/:id", function (req, res) {
    db.Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbCollections) {
        res.json(dbCollections);
    });
});

//Route: Update certain collection;
//==========================================================
router.put("/collection/:id", function (req, res) {
    db.Post.update({
        where: {
            id: req.params.id
        }
    }).then(function (dbCollections) {
        res.json(dbCollections);
    });
});

//Route: Get all collections under certain category by name;
//==========================================================
router.get("/category/:category_name", function (req, res) {
    db.Collections.findAll({
        where: {
            category_name: req.params.category_name
        },
        include: [db.Collectors]
    }).then(function (dbCollections) {
        res.json(dbCollections);
    });
});

//Route: Get all collections under certain category by id;
//==========================================================
router.get("/categoryId/:category_id", function (req, res) {
    db.Collections.findAll({
        where: {
            category_id: req.params.category_id
        },
        include: [db.Collectors]
    }).then(function (dbCollections) {
        res.json(dbCollections);
    });
});

//Route: Get all collections under certain user by username;
//==========================================================
router.get("/collector/:username", function (req, res) {
    db.Collections.findAll({
        where: {
            username: req.params.username
        },
        include: [db.Collectors]
    }).then(function (dbCollections) {
        res.json(dbCollections);
    });
});

//Route: Get all collections under certain user by id;
//==========================================================
router.get("/collectorId/:id", function (req, res) {
    db.Collections.findAll({
        where: {
            id: req.params.id
        },
        include: [db.Collectors]
    }).then(function (dbCollections) {
        res.json(dbCollections);
    });
});

//Route: Get all collections with certain keyword;
//==========================================================
router.get("/keyword/:keyword", function (req, res) {
    db.Collections.findAll({
        where: {
            title: {$like: `%${req.params.keyword}%`}
            // TODO: title contains keyword;
        },
        include: [db.Collectors]
    }).then(function (dbCollections) {
        res.json(dbCollections);
    });
});

// Export router;
module.exports = router;