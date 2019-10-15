
module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.TEXT,
        quantity: DataTypes.INTEGER,

    });
    return Item
}






