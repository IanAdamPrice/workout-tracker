const { Workouts } = require('../models');

const workoutdata = [
  {
    exercise: 'Cardio',
    intensity: 'Light',
    duration: '60',
    distance: '2',
    user_id: 4
  }
];

const seedWorkout = () => Workouts.bulkCreate(workoutdata);

module.exports = seedWorkout;