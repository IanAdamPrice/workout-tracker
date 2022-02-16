const router = require('express').Router();

const statsRoutes = require('./stats-routes');
const userRoutes = require('./user-routes');

router.use('/stats', statsRoutes);
router.use('/users', userRoutes);

module.exports = router;
