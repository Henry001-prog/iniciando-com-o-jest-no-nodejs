const Sequelize = require('sequelize');
//const db = require('../config/db'); // Uncomment this line before running yarn run dev to use MySQL database
const db = require('../config/dbTest');
const Situation = require('./ProductStatus');

const Product = db.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Product.belongsTo(Situation, { foreignKey: 'situationId', allowNull: false });

//Create the table
//Product.sync(); // Uncomment the line before running the yarn run dev command to create the table


//Check if there is any difference in the table and make the change
//Product.sync({ alter: true });

module.exports = Product;