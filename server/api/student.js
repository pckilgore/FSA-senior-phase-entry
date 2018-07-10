'use strict';

const router = require('express').Router();
const Student = require('../db/student');

// Note: Default error handler status is 500
router.get('/all', (req, res, next) => {
  Student.findAll()
    .then(data => res.json(data))
    .catch(next);
});

router
  .route('/:id')
  .get((req, res, next) => {
    Student.findById(req.params.id)
      .then(data => res.json(data)) // TODO handle case where record not found.
      .catch(next);
  })
  .post((req, res, next) => {})
  .put((req, res, next) => {})
  .delete((req, res, next) => {
    Student.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).send())
      // TODO handle case where record not found.
      .catch(next);
  });

module.exports = router;
