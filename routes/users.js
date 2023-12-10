const router = require('express').Router();
const user = require('../controllers/users');

router.post("/add", user.createUser);

router.get('/findAll', user.fetchUser);

router.get('/findOne', user.findOne);

router.delete('/deleteUser', user.deleteUser);

router.delete('/deleteAllUser', user.deleteAllUser);

module.exports = router;