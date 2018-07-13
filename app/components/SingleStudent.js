import React from 'react';
import { connect } from 'react-redux';
import {
  fetchCampuses,
  fetchStudents,
  selectCampus,
  deleteStudent,
} from '../reducers';

import CampusList from './CampusList';
import StudentDetail from './StudentDetail';
import NothingHere from './NothingHere';
import StudentActions from './StudentActions';

class SingleStudent extends React.Component {
  componentDidMount() {
    this.props.fetchCampuses();
    this.props.fetchStudents();
  }

  handleDelete = id => {
    this.props.deleteStudent(id);
    setTimeout(() => this.props.history.push(`/students/`), 500);
  };

  render() {
    // Wait until student lookup is complete if this was a direct link.
    const selectedStudent = this.props.selectedStudent;
    if (!selectedStudent) return <NothingHere message="Loading..." />;

    return (
      <div className="container">
        <h3 className="row center header col s12 light blue-grey-text text-darken-2">
          {selectedStudent.firstName + ' ' + selectedStudent.lastName}
        </h3>
        <StudentDetail {...selectedStudent} />
        <StudentActions
          {...selectedStudent}
          editStudent={this.props.editStudent}
          deleteStudent={this.handleDelete}
        />
        <div className="divider" />
        <div className="section teal-text">
          <h5>Campus</h5>
        </div>
        {selectedStudent.campusId ? (
          <div className="col offset-m4 offset-l5">
            <CampusList
              className="right"
              campuses={this.props.campuses.filter(
                campus => campus.id === selectedStudent.campusId
              )}
              selectCampus={this.props.selectCampus}
            />
          </div>
        ) : (
          <NothingHere message="Student is not enrolled at any campus." />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // Handle direct links. Default state has id=0 so we can test for that.
  const urlStudentId = +ownProps.match.params.student;
  const selectStudentFromUrlorState =
    state.selectedStudent.id === 0
      ? state.students.find(student => student.id === urlStudentId)
      : state.selectedStudent;

  return {
    ...ownProps,
    selectedStudent: selectStudentFromUrlorState,
    campuses: state.campuses,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCampuses: () => dispatch(fetchCampuses()),
    fetchStudents: () => dispatch(fetchStudents()),
    selectCampus: campus => dispatch(selectCampus(campus)),
    deleteStudent: studentId => dispatch(deleteStudent(studentId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
