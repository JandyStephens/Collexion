var db = require("../models");

module.exports = function (app) {
    // Find all collectors and return them to the user with res.json
    app.get("/api/collectors", function (req, res) {
        db.Collector.findAll({}).then(function (dbCollector) {
            res.json(dbCollector);
        });
    });

    app.get("/api/collectors/:id", function (req, res) {
        // Find one Collector with the id in req.params.id and return them to the user with res.json
        db.Collector.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbCollector) {
            res.json(dbCollector);
        });
    });

    app.post("/api/collectors", function (req, res) {
        // Create an Collector with the data available to us in req.body
        console.log(req.body);
        db.Collector.create(req.body).then(function (dbCollector) {
            res.json(dbCollector);
        });
    });

    app.delete("/api/collectors/:id", function (req, res) {
        // Delete the Collector with the id available to us in req.params.id
        db.Collector.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbCollector) {
            res.json(dbCollector);
        });
    });

};
