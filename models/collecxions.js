module.exports = function (sequelize, DataTypes) {
    var Collections = sequelize.define("Collections", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
        created_at: DataTypes.DATE,
    
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
    
        user_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
        category_id: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    return Collections;
}