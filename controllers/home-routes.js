const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Stats } = require('../models');

router.get('/', (req, res) => {
  console.log('======================');
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
    .then(dbPostData => {
        const users = dbPostData.map(users => users.get({ plain: true }));

        res.render('homepage', {
          users,
          loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/mealapi', (req, res) => {
  res.render('mealapi');
})

router.get('/', (req, res) => {
    res.render('user-login')
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  
  res.render('login');
});

module.exports = router;