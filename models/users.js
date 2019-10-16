var bcrypt = require('bcrypt');

module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
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