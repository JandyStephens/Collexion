module.exports = function (sequelize, DataTypes) {
<<<<<<< HEAD
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
=======
    var Collexion = sequelize.define("Collexion", {
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    });


    // Collexion.associate = function (models) {
    //     //Assoc. Collextor with Collextion. When Collextor deleted, also delete associated Collexions.
    //     Collexion.hasMany(models.Collexion, {
    //         onDelete: "cascade"
    //     });
    //     // Collextor.belongsToMany( )
    // };
    return Collexion;
};
>>>>>>> 55a20f84e9eadc94dc02a9b77fc9cd2f83ecf60e
