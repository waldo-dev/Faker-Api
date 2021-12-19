const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/companies', require('./companies'));
router.use('/user/company', require('./user-company'));


module.exports = router