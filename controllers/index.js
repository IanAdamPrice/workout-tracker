const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const statsRoutes = require('./stats-routes.js');

router.use('/', homeRoutes);
router.use('/stats', statsRoutes);
router.use('/api', apiRoutes);

module.exports = router;
