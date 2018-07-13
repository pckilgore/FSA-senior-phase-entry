import React from 'react';

const StudentDetail = props => (
  <div className="col s12">
    <div className="card horizontal">
      <div className="card-image">
        <img src={props.imageUrl} />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p>
            <ul>
              <li>
                <strong>Email:</strong> {props.email}
              </li>
              <li>
                <strong>GPA:</strong> {props.gpa}
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default StudentDetail;
