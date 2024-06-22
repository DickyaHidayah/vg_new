const sequelize = require('../config/database');
const User = require('./user');
const Volunteer = require('./volunteer');
const Organization = require('./organization');

const connectDb = async () => {
  try {
    await sequelize.sync({ force: true }); // Change to false in production
    console.log('Database synchronized');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { connectDb, User, Volunteer, Organization };
