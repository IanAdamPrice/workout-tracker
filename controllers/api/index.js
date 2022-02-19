const router = require('express').Router();

const statsRoutes = require('./stats-routes');
const userRoutes = require('./user-routes');
const workoutRoutes = require('./workout-routes');

router.use('/stats', statsRoutes);
router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);

module.exports = router;
