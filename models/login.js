module.exports = function (sequelize, DataTypes) {
    var Login = sequelize.define("Login", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.TEXT,
        quantity: DataTypes.INTEGER,

    });
    return Login
}


