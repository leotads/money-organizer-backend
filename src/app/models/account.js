'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    name: DataTypes.STRING,
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {         // User belongsTo Company 1:1
        model: 'User',
        key: 'id'
      }
    }
  }, {});

  Account.associate = models => {
    Account.belongsTo(models.User, {
      foreignKey: 'userId', 
      as: 'user'
    })
  };

  return Account;
};