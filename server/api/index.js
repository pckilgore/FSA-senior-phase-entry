'use strict';

const router = require('express').Router();

router.use('/campus', require('./campus'));

router.use('/student', require('./student'));

module.exports = router;
