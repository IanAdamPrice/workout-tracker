const router = require('express').Router();
const { Stats } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Stats.findAll()
    .then(dbStatsData => res.json(dbStatsData))
    .catch(err => {
      console.log(err);
      res.statusCode(500).json(err);
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

module.export = router;