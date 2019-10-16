// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Users = sequelize.define("users", {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },

    password:{
        type: Sequelize.STRING,
        allowNull: false
    },

    image_url:{
        type: Sequelize.STRING,
        allowNull: false 
    },

    gender: Sequelize.ENUM('male','female'),

    description: Sequelize.TEXT
});

// Syncs with DB
Users.sync();

module.exports = Users;