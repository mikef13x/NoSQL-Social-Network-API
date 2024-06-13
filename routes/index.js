//require express and api routes
const router = require('express').Router();
const apiRoutes = require('/api');
//use the router
router.use('/api', apiRoutes);
router.use((req, res) => res.send('Wrong Route!'));
//export the router
module.exports = router