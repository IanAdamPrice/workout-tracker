const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stats extends Model {}

Stats.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    workout_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    meal_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    goals: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'stats'
  }
);

module.exports = Stats;