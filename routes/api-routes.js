// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/config.json");

//TODO: need to add ID as well (for all three)? Doesn't sequelize auto add ID?
var Item = sequelize.define("item", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: Sequelize.TEXT,
    quantity: Sequelize.INT,
    user_id: Sequelize.INT,
    cat_id: Sequelize.INT
});

var Category = sequelize.define("category", {
    name: Sequelize.STRING
});

var Login = sequelize.define("login", {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    }
});

Item.sync();
Category.sync();
Login.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Item;
module.exports = Category;
module.exports = Login;
