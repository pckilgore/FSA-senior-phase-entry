'use strict';

const router = require('express').Router();
const Campus = require('../db/campus');

const campusFromJSON = campusJSON => ({
  name: campusJSON.name,
  address: campusJSON.address,
  imageUrl: campusJSON.imageUrl,
  description: campusJSON.description,
});

router
  .route('/')
  .get((req, res, next) =>
    Campus.findAll()
      .then(campuses => res.json(campuses))
      .catch(next))
  .post((req, res, next) =>
    Campus.create(campusFromJSON(req.body))
      .then(newCampus => res.status(201).send(newCampus))
      .catch(next))
  .all((req, res, next) =>
    res
      .header({ Allow: 'GET, POST' })
      .status(405)
      .send());

router
  .route('/:campusId')
  .get((req, res, next) =>
    Campus.findById(+req.params.campusId)
      .then(campus => (campus ? res.json(campus) : res.status(404).end()))
      .catch(next))
  .put((req, res, next) =>
    Campus.update(campusFromJSON(req.body), {
      where: { id: +req.params.campusId },
      returning: true,
    })
      .spread(
        (done, updatedCampuses) =>
          (done ? res.json(...updatedCampuses) : res.status(404).end())
      )
      .catch(next))
  .delete((req, res, next) =>
    Campus.destroy({ where: { id: +req.params.campusId } })
      .then(done => (done ? res.status(204).end() : res.status(404).end()))
      .catch(next))
  .all((req, res, next) =>
    res
      .header({ Allow: 'GET, PUT, DELETE' })
      .status(405)
      .send());

module.exports = router;
