const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('snapchat', 'thyss', 'thyss', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => {
      console.log('Connect to Database Snapchat');
    })
    .catch(err => {
      console.error('Error connecting to Database Snapchat:', err);
    });

module.exports = sequelize;
