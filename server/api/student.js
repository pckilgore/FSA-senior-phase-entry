'use strict';

const router = require('express').Router();
const Student = require('../db/student');

const studentFromJSON = studentJSON => ({
  firstName: studentJSON.firstName,
  lastName: studentJSON.lastName,
  email: studentJSON.email,
  imageUrl: studentJSON.imageUrl,
  gpa: +studentJSON.gpa,
  campusId: studentJSON.campusId ? +studentJSON.campusId : null,
});

router
  .route('/')
  .get((req, res, next) =>
    Student.findAll()
      .then(students => res.json(students))
      .catch(next))
  .post((req, res, next) =>
    Student.create(studentFromJSON(req.body))
      .then(newStudent => res.status(201).send(newStudent))
      .catch(next))
  .all((req, res, next) =>
    res
      .header({ Allow: 'GET, POST' })
      .status(405)
      .send());

router
  .route('/:studentId')
  .get((req, res, next) =>
    Student.findById(+req.params.studentId)
      .then(student => (student ? res.json(student) : res.status(404).end()))
      .catch(next))
  .put((req, res, next) =>
    Student.update(studentFromJSON(req.body), {
      where: { id: +req.params.studentId },
      returning: true,
    })
      .spread(
        (done, updatedStudents) =>
          (done ? res.json(...updatedStudents) : res.status(404).end())
      )
      .catch(next))
  .delete((req, res, next) =>
    Student.destroy({ where: { id: +req.params.studentId } })
      .then(done => (done ? res.status(204).end() : res.status(404).end()))
      .catch(next))
  .all((req, res, next) =>
    res
      .header({ Allow: 'GET, PUT, DELETE' })
      .status(405)
      .send());

module.exports = router;
