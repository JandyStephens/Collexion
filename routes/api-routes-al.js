//TODO: INPUT THE DATA FROM DATA

module.exports = function (app) {
    app.get("api/collections", function (req, res) {
        //TODO: Display all collections;
    });

    app.get("/api/category/:collection_id", function (req, res) {
        var chosen = req.params.collection_id;
        //TODO: Display all collections of certain category;
    });

    app.get("/api/user/:collection_id", function (req, res) {
        var chosen = req.params.collection_id;
        //TODO: Display all collections of certain user;
    });

    app.get("/api/keyword/:character", function (req, res) {
        //TODO: Display all collections whose title includes keyword;
    });
}