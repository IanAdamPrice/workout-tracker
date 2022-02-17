const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Stats } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('======================');
    Stats.findAll({
      where: {
        user_id: req.session.user_id
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
      .then(dbStatData => {
        const posts = dbStatData.map(post => post.get({ plain: true }));
        res.render('stats', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/edit/:id', withAuth, (req, res) => {
    Stats.findByPk(req.params.id, {
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
      .then(dbStatData => {
        if (dbStatData) {
          const post = dbStatData.get({ plain: true });
          
          res.render('edit-stat', {
            post,
            loggedIn: true
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  module.exports = router;