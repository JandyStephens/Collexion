const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
    var Collector = sequelize.define("Collector", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: DataTypes.STRING,


        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        image_url: {
            type: DataTypes.STRING,
            // allowNull: false
        },

        gender: DataTypes.ENUM('male', 'female'),

        description: DataTypes.TEXT
    });

    Collector.associate = function (models) {
        Collector.hasMany(models.Collections, {
            onDelete: "cascade"
        });
    };

    return Collector;
};