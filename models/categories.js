// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Categories = sequelize.define("users", {
    category_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image_url:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Syncs with DB
Categories.sync();

module.exports = Categories;