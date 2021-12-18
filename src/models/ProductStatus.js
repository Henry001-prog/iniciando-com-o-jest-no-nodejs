const Sequelize = require('sequelize');
//const db = require('../config/db'); // Uncomment this line before running yarn run dev to use MySQL database
const db = require('../config/dbTest');

const ProductStatus = db.define('situations', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name_status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
});

//Create the table
//ProductStatus.sync();
/*ProductStatus.sync({logging: false}).then(() => {
    ProductStatus.sequelize.close();
});*/
/*For reasons of API functioning, 
I opted to let the column data be inserted manually directly in MySQL*/
// The three data entered in the name_status column in the database were: In Stock, Out of Stock and Awaiting Replacement

//Check if there is any difference in the table and make the change
//User.sync({ alter: true });

module.exports = ProductStatus;