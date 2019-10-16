
module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    });


    // Category.associate = function (models) {
    //     //Assoc. Collextor with Collextion. When Collextor deleted, also delete associated Collexions.
    //     Category.hasMany(models.Collexion, {
    //         onDelete: "cascade"
    //     });
    //     // Collextor.belongsToMany( )
    // };
    return Category;
};