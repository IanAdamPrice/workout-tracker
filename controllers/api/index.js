const router = require('express').Router();

const statsRoutes = require('./stats-routes.js');

router.use('/stats', statsRoutes);

module.exports = router;
