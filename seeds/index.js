const seedUsers = require('./user-seeds');
const seedStats = require('./stats-seeds');
const seedWorkout = require('./workout-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedStats();
  console.log('--------------');

  await seedWorkout();
  console.log('-------------')

  process.exit(0);
};

seedAll();