module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    });


    // Users.associate = function (models) {
    //     //Assoc. Collextor with Collextion. When Collextor deleted, also delete associated Collexions.
    //     Users.hasMany(models.Collexion, {
    //         onDelete: "cascade"
    //     });
    //     // Collextor.belongsToMany( )
    // };
    return Users;
};