import React from 'react';

const CampusDisplay = props => (
  <div>
    <div className="row center header col s1">
      <img
        src={props.imageUrl}
        alt="Campus Image"
        height="800px"
        width="800px"
      />{' '}
    </div>
    <p> {props.address}</p>
    <br />
    <p> {props.description}</p>
    <br />
  </div>
);

export default CampusDisplay;
