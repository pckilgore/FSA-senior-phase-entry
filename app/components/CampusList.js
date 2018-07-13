import React from 'react';
import { Link } from 'react-router-dom';
import CampusCard from './CampusCard';

const CampusList = props => {
  return (
    <div className="row">
      {props.campuses.map(campus => (
        <Link
          key={campus.id}
          to={'/campuses/' + campus.id}
          onClick={() => props.selectCampus(campus)}
        >
          <CampusCard {...campus} />
        </Link>
      ))}
    </div>
  );
};

export default CampusList;
