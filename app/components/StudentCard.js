import React from 'react';

const StudentCard = props => (
  <div className="col s6 m4 l3 ">
    <div className="card hoverable">
      <div className="card-image">
        <img src={props.imageUrl} />
      </div>
      <div className="card-content">
        <p>
          {props.firstName}
          <br />
          {props.lastName}
        </p>
      </div>
    </div>
  </div>
);

export default StudentCard;
