const { Workouts } = require('../models');

const workoutdata = [
  {
    exercise: 'Cardio',
    intensity: 'Light',
    duration: '60',
    distance: '2',
    weight: 'squat',
    reps: '5'
  }
];

const seedWorkout = () => Workouts.bulkCreate(workoutdata);

module.exports = seedWorkout;