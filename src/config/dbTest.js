const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/database/database.sqlite'
});

/*sequelize.authenticate()
.then(function() {
    console.log('Database connection successful!');
}).catch(function() {
    console.log('Error: database connection not successful!');
});*/

module.exports = sequelize;