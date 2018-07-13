import React from 'react';
import { connect } from 'react-redux';
import {
  fetchCampuses,
  fetchStudents,
  selectStudent,
  deleteCampus,
  editCampus,
} from '../reducers';

import CampusActions from './CampusActions';
import CampusDisplay from './CampusDisplay';
import NothingHere from './NothingHere';
import StudentList from './StudentList';

class SingleCampus extends React.Component {
  componentDidMount() {
    this.props.fetchCampuses();
    this.props.fetchStudents();
  }

  handleDelete = id => {
    this.props.deleteCampus(id);
    setTimeout(() => this.props.history.push(`/campuses/`), 1000);
  };

  render() {
    // Wait until campus lookup is complete if this was a direct link.
    const selectedCampus = this.props.selectedCampus;
    if (!selectedCampus) return <NothingHere message="Loading..." />;

    // Filter students.
    const studentsOnCampus = this.props.students.filter(
      student => student.campusId === selectedCampus.id
    );

    return (
      <div className="container">
        <h3 className="row center header col s12 light blue-grey-text text-darken-2">
          {selectedCampus.name} Campus
        </h3>
        <CampusDisplay {...selectedCampus} />
        <CampusActions
          {...selectedCampus}
          editCampus={this.props.editCampus}
          deleteCampus={this.handleDelete}
        />
        <p />
        <h4 className="row center header col s12 light blue-grey-text">
          Enrolled Students
        </h4>
        {studentsOnCampus.length === 0 ? (
          <NothingHere message="No students enrolled." />
        ) : (
          <StudentList
            students={studentsOnCampus}
            selectStudent={this.props.selectStudent}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // Handle direct links. Default state has id=0 so we can test for that.
  const urlCampusId = +ownProps.match.params.campus;
  const selectCampusFromUrlorState =
    state.selectedCampus.id === 0
      ? state.campuses.find(campus => campus.id === urlCampusId)
      : state.selectedCampus;

  return {
    ...ownProps,
    students: state.students,
    selectedCampus: selectCampusFromUrlorState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCampuses: () => dispatch(fetchCampuses()),
    fetchStudents: () => dispatch(fetchStudents()),
    selectStudent: student => dispatch(selectStudent(student)),
    deleteCampus: campusId => dispatch(deleteCampus(campusId)),
    editCampus: campusId => dispatch(editCampus(campusId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
