const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
    var Collector = sequelize.define("Collector", {
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    });


    // Collector.associate = function (models) {
    //     //Assoc. Collextor with Collextion. When Collextor deleted, also delete associated Collexions.
    //     Collector.hasMany(models.Collexion, {
    //         onDelete: "cascade"
    //     });
    //     // Collextor.belongsToMany( )
    // };
    return Collector;
};