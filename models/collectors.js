const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
    var Collector = sequelize.define("Collector", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
    
        image_url:{
            type: DataTypes.STRING,
            allowNull: false 
        },
    
        gender: DataTypes.ENUM('male','female'),
    
        description: DataTypes.TEXT
    });


    // Collector.associate = function (models) {
    //     //Assoc. Collextor with Collextion. When Collextor deleted, also delete associated Collexions.
    //     Collector.hasMany(models.Collexion, {
    //         onDelete: "cascade"
    //     });
    //     // Collextor.belongsToMany( )
    // };
    return Collectors;
};