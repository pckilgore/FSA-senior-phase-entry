'use strict';

const router = require('express').Router();

router.use('/campus', require('./campus'));

router.use('/student', require('./student'));

router.all('*', (req, res, next) => res.status(404).end());

module.exports = router;
