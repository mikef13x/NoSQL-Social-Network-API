//require express
 const router = require('express').Router();
//create the routes
 const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,

} = require('../../controllers/userController');
//api/users route
router.route('/').get(getUsers).post(createUser);
//api/users/:id route
router
.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);
//api/users/:userId/friends/:friendId route
router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);
//export router
module.exports = router;