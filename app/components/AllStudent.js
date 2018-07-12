import React from 'react';
import { fetchCampuses, fetchStudents } from '../reducers';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StudentCard from './StudentCard';

class AllStudent extends React.Component {
  componentDidMount() {
    this.props.fetchCampuses();
    this.props.fetchStudents();
  }
  render() {
    return (
      <div className="container">
        {this.props.students.length === 0 ? (
          <NoStudent />
        ) : (
          <div className="row">
            {this.props.students.map(student => (
              <Link key={student.id} to={`/students/` + student.id}>
                <StudentCard {...student} />
              </Link>
            ))}{' '}
          </div>
        )}
      </div>
    );
  }
}

const NoStudent = () => (
  <h2 className="row center header col s12 light blue-grey-text text-darken-2">
    No Students are currently enrolled at any campus
  </h2>
);

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    students: state.students,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCampuses: () => dispatch(fetchCampuses()),
    fetchStudents: () => dispatch(fetchStudents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllStudent);
