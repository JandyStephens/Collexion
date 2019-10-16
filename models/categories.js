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

    // Categories.associate = function (models) {
    //     //Assoc. Collextor with Collextion. When Collextor deleted, also delete associated Collexions.
    //     Collector.hasMany(models.Collexion, {
    //         onDelete: "cascade"
    //     });
    //     // Collextor.belongsToMany( )
    // };