const router = require('express').Router();
const { Stats, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Stats.findAll({
    attributes: [
      'user_id',
      'height',
      'age',
      'weight',
      'workout_count',
      'meal_count',
      'goals'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbStatsData => res.json(dbStatsData))
    .catch(err => {
      console.log(err);
      res.statusCode(500).json(err);
    });
});

router.get('/:id', (req,res) => {
  Stats.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'user_id',
      'height',
      'age',
      'weight',
      'workout_count',
      'meal_count',
      'goals'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbStatsData => {
      if (!dbStatsData) {
        res.status(404).json({ message: 'No stats found with this id' });
        return;
      }
      res.json(dbStatsData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req,res) => {
  Stats.create({
    user_id: req.session.user_id,
    height: req.body.height,
    age: req.body.age,
    weight: req.body.weight,
    workout_count: req.body.workout_count,
    meal_count: req.body.meal_count,
    goals: req.body.goals
  })
  .then(dbStatsData => res.json(dbStatsData))
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', (req,res) => {
  Stats.update(
    {
      height: req.body.height,
      age: req.body.age,
      weight: req.body.weight,
      workout_count: req.body.workout_count,
      meal_count: req.body.meal_count,
      goals: req.body.goals
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbStatsData => {
      if (!dbStatsData) {
        res.status(404).json({ message: "No stats found with this id" });
        return;
      }
      res.json(dbStatsData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;