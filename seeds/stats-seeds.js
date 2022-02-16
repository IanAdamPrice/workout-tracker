const { Stats } = require('../models');

const statsdata = [
  {
    user_id: 1,
    height: 5.7,
    age: 28,
    weight: 185,
    workout_count: 234,
    meal_count: 34,
    goals: "Bulk up to 200lbs!!!"
  },
  {
    user_id: 2,
    height: 6.4,
    age: 34,
    weight: 243,
    workout_count: 45,
    meal_count: 21,
    goals: "Slim down to 190 pounds."
  }
];

const seedStats = () => Stats.bulkCreate(statsdata);

module.exports = seedStats;