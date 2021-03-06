import React from 'react';

const CampusDisplay = props => (
  <div className="row valign-wrapper">
    <div className="card col l8 offset-l2 valign">
      <div className="card-image">
        <img src={props.imageUrl} />
      </div>
      <div className="card-content">
        <div className="divider" />
        <blockquote className="section flow-text"> {props.address}</blockquote>
        <p className="flow-text"> {props.description}</p>
      </div>
    </div>
  </div>
);

export default CampusDisplay;
