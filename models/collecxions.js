// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Collections = sequelize.define("collections", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },

    created_at: Sequelize.DATE,

    price: Sequelize.INTEGER,

    quantity: Sequelize.INTEGER,

    image1_url: {
        type: Sequelize.STRING,
        allowNull: false
    },

    image2_url: Sequelize.STRING,
    image3_url: Sequelize.STRING,
    image4_url: Sequelize.STRING,
    image5_url: Sequelize.STRING,

    description: Sequelize.TEXT,

    comments: Sequelize.TEXT,

    user_id: {
        type: Sequelize.STRING,
        allowNull: false
    },

    category_id: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Syncs with DB
Collections.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Collections;