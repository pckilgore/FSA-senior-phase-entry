'use strict';

const router = require('express').Router();
const Campus = require('../db/campus');

// Note: Default error handler status is 500
router.get('/all', (req, res, next) => {
  Campus.findAll()
    .then(data => res.json(data))
    .catch(next);
});

router
  .route('/:id')
  .get((req, res, next) => {
    Campus.findById(req.params.id)
      .then(data => res.json(data)) // TODO handle case where record not found.
      .catch(next);
  })
  .post((req, res, next) => {})
  .put((req, res, next) => {})
  .delete((req, res, next) => {
    Campus.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).send())
      // TODO handle case where record not found.
      .catch(next);
  });

module.exports = router;
