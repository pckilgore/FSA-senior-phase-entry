import React from 'react';
import { connect } from 'react-redux';
import { fetchCampuses, fetchStudents } from '../reducers';
import { Link } from 'react-router-dom';

class SingleCampus extends React.Component {
  componentDidMount() {
    this.props.fetchCampuses();
    this.props.fetchStudents();
  }
  render() {
    const selectedCampus = this.props.selectedCampus;
    return (
      <div className="container">
        <h3 className="row center header col s12 light blue-grey-text text-darken-2">
          {selectedCampus.name} Campus
        </h3>
        <div className="row center header col s1">
          <img
            src={selectedCampus.imageUrl}
            alt="Campus Image"
            height="800px"
            width="800px"
          />{' '}
        </div>
        <p> {selectedCampus.address}</p>
        <br />
        <p> {selectedCampus.description}</p>
        <br />
        <hr />
        <h4 className="row center header col s12 light blue-grey-text">
          Current Students
        </h4>
        <ul>
          {this.props.campusStudents.length === 0 ? (
            <li>No Students are currently enrolled at this campus</li>
          ) : (
            this.props.campusStudents.map(student => (
              <li key={student.id}>
                <Link to={`/student/` + student.id}>
                  <img src={student.imageUrl} />
                  <p>{student.firstName + ' ' + student.lastName}</p>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const currentCampusId = +ownProps.match.params.campus;
  return {
    ...ownProps,
    campuses: state.campuses,
    campusStudents: state.students.filter(
      student => student.campusId === currentCampusId
    ),
    selectedCampus: state.campuses[currentCampusId - 1],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCampuses: () => dispatch(fetchCampuses()),
    fetchStudents: () => dispatch(fetchStudents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
