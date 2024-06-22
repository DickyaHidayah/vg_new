const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Organization = sequelize.define('Organization', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  organizationName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  establishedDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  website: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
});

User.hasOne(Organization, { foreignKey: 'userId' });
Organization.belongsTo(User, { foreignKey: 'userId' });

module.exports = Organization;
