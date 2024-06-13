// require express
const router = require('express').Router();
//create variables for the routes and require controller
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController.js');

// create routes for /
router.route('/').get(getThoughts).post(createThought);

//creates routes based on id
router
.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);
//export router
module.exports = router;