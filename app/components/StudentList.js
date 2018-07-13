import React from 'react';
import { Link } from 'react-router-dom';
import StudentCard from './StudentCard';

const StudentList = props => (
  <div className="row">
    {props.students.map(student => (
      <Link
        key={student.id}
        to={`/students/` + student.id}
        onClick={() => props.selectStudent(student)}
      >
        <StudentCard {...student} />
      </Link>
    ))}{' '}
  </div>
);

export default StudentList;
