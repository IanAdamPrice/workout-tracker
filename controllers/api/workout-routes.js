const { User, Stats, Workouts } = require("../../models");
const router = require('express').Router();
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
  console.log('=====================');
  Workouts.findAll({
    attributes: [
      'id',
      'exercise',
      'intensity',
      'duration',
      'distance',
      'weight',
      'reps'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbWorkoutData => res.json(dbWorkoutData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Workouts.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'exercise',
      'intensity',
      'duration',
      'distance',
      'weight',
      'reps'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbWorkoutData => {
      if (!dbWorkoutData) {
        res.status(404).json({ message: 'No workout found with this id' });
        return;
      }
      res.json(dbWorkoutData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;