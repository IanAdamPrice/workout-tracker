const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Stats, Workouts } = require('../models');

router.get('/', (req, res) => {
  Workouts.findAll({
    where: {
      user_id: req.session.user_id
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
      const workouts = dbWorkoutData.map(post => post.get({ plain: true }));
      res.render('dashboard', { workouts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;