const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workouts extends Model {}

Workouts.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      exercise: {
        type: DataTypes.STRING
      },
      intensity: {
        type: DataTypes.STRING
      },
      duration: {
        type: DataTypes.INTEGER
      },
      distance: {
        type: DataTypes.INTEGER
      },
      weight: {
        type: DataTypes.STRING
      },
      reps: {
        type: DataTypes.INTEGER
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'workouts'
    }
);

module.exports = Workouts;