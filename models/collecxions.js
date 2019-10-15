module.exports = function (sequelize, DataTypes) {
    var Collexion = sequelize.define("Collexion", {
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    });


    // Collexion.associate = function (models) {
    //     //Assoc. Collextor with Collextion. When Collextor deleted, also delete associated Collexions.
    //     Collexion.hasMany(models.Collexion, {
    //         onDelete: "cascade"
    //     });
    //     // Collextor.belongsToMany( )
    // };
    return Collexion;
};