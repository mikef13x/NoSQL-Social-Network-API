//require express and routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
//use the routes
router.use('/users', userRoutes)
router.use('/thoughts', thoughtRoutes)
//export the router
module.exports = router;