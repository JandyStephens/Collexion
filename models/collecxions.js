module.exports = function (sequelize, DataTypes) {
    var Collections = sequelize.define("Collections", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        price: DataTypes.INTEGER,

        quantity: DataTypes.INTEGER,

        image1_url: {
            type: DataTypes.STRING,
            allowNull: false
        },

        image2_url: DataTypes.STRING,
        image3_url: DataTypes.STRING,
        image4_url: DataTypes.STRING,
        image5_url: DataTypes.STRING,

        description: DataTypes.TEXT,

        comments: DataTypes.TEXT,

    });

    Collections.associate = function (models) {
        models.Collections.belongsTo(models.Collector, {
            foreignKey: {
                allowNull: false
            }
        });
        models.Collections.belongsTo(models.Category, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Collections;
}