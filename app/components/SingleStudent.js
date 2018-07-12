import React from 'react';

const SingleStudent = props => (
  <h3 className="row center header col s12 light blue-grey-text text-darken-2">
    SingleStudent Placeholder for {props.match.params.student}
  </h3>
);

export default SingleStudent;
