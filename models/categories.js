module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return Category;
};