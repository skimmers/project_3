const router = require('express').Router();

const apiRoutes = require('./routes/api');
const homeRoutes = require('./routes/homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
