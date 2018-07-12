import React from 'react';

const CampusCard = props => (
  <div className="col s12 m6 l4 xl3">
    <div className="card hoverable">
      <div className="card-image">
        <img src={props.imageUrl} />
      </div>
      <div className="card-content">
        <span className="card-title">{props.name}</span>
      </div>
    </div>
  </div>
);

export default CampusCard;
