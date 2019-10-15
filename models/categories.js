<<<<<<< HEAD
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
=======

module.exports = function (sequelize, DataTypes) {
    var Categories = sequelize.define("Categories", {
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    });


    // Categories.associate = function (models) {
    //     //Assoc. Collextor with Collextion. When Collextor deleted, also delete associated Collexions.
    //     Collector.hasMany(models.Collexion, {
    //         onDelete: "cascade"
    //     });
    //     // Collextor.belongsToMany( )
    // };
    return Categories;
>>>>>>> 55a20f84e9eadc94dc02a9b77fc9cd2f83ecf60e
};