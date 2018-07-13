import React from 'react';
import { Link } from 'react-router-dom';

const CampusActions = props => {
  if (props.addCampus) {
    return (
      <div className="center-align section">
        <Link to="/campuses/add" className="blue waves-effect waves-light btn">
          <i className=" material-icons left">add_circle</i>Add New Campus
        </Link>
      </div>
    );
  } else {
    return (
      <div className="center-align">
        <Link to="/campuses/edit" className="blue waves-effect waves-light btn">
          <i className=" material-icons left">edit</i>Update {props.name} Campus
        </Link>
        <span>{'  '} </span>
        <div
          onClick={() => props.deleteCampus(props.id)}
          className="red waves-effect waves-light btn"
        >
          <i className="material-icons left">delete</i>Delete {props.name}{' '}
          Campus (THERE IS NO CONFIRM!!!)
        </div>
      </div>
    );
  }
};

export default CampusActions;
