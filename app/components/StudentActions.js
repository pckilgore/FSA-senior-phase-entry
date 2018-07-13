import React from 'react';
import { Link } from 'react-router-dom';

const StudentActions = props => {
  if (props.addStudent) {
    return (
      <div className="center-align section">
        <Link to="/students/add" className="blue waves-effect waves-light btn">
          <i className=" material-icons left">add_circle</i>Add New Student
        </Link>
      </div>
    );
  } else {
    return (
      <div className="right-align">
        <div className="float-right">
          <Link
            to="/students/edit"
            className="section blue waves-effect waves-light btn"
          >
            <i className=" material-icons left">edit</i>Update Student
          </Link>
        </div>

        <span>{'  '} </span>
        <div className="section col 6">
          <div
            onClick={() => props.deleteStudent(props.id)}
            className="section red waves-effect waves-light btn"
          >
            <i className="material-icons left">delete</i>Delete Student (THERE
            IS NO CONFIRM!!!)
          </div>
        </div>
      </div>
    );
  }
};

export default StudentActions;
