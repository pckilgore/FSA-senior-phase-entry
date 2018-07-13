import React from 'react';
import { fetchCampuses, fetchStudents, selectStudent } from '../reducers';
import { connect } from 'react-redux';
import StudentList from './StudentList';
import NothingHere from './NothingHere';
import StudentActions from './StudentActions';

class AllStudent extends React.Component {
  componentDidMount() {
    this.props.fetchCampuses();
    this.props.fetchStudents();
  }
  render() {
    return (
      <div className="container">
        <StudentActions addStudent="true" />
        {this.props.students.length === 0 ? (
          <NothingHere message="No students enrolled at any campus." />
        ) : (
          <StudentList
            students={this.props.students}
            selectStudent={this.props.selectStudent}
          />
        )}
      </div>
    );
  }
}

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
    selectStudent: student => dispatch(selectStudent(student)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllStudent);
