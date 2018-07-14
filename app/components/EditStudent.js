import React from 'react';
import StudentForm from './StudentForm';
import { connect } from 'react-redux';
import { editStudent, fetchCampuses } from '../reducers';

class EditStudent extends React.Component {
  // Keeps local state with new data until it is committed.
  state = {
    firstName: '',
    lastName: '',
    email: '',
    imageUrl: '',
    gpa: NaN,
    campusId: 0,
  };

  componentDidMount() {
    this.props.fetchCampuses();
    this.setState(() => ({ ...this.props.selectedStudent }));
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.editStudent({ ...this.state });
    setTimeout(() => {
      this.props.history.push(`/students/${this.props.selectedStudent.id}`);
    }, 200);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    // Leave if no campus is currently selected.
    if (this.props.selectedStudent.id === 0) this.props.history.push('/students/');

    // Render form if there is a selected campus.
    return (
      <div className="container">
        <h3>Edit {this.props.selectedStudent.name} Campus </h3>
        <div className="card">
          <div className="card-content">
            <StudentForm
              student={this.state}
              campuses={this.props.campuses}
              submitFn={this.handleSubmit}
              changeFn={this.handleChange}
              active="active"
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  campuses: state.campuses,
  selectedStudent: state.selectedStudent,
  nextCampus: state.nextCampus,
});

const mapDispatchToProps = dispatch => ({
  editStudent: student => dispatch(editStudent(student)),
  fetchCampuses: () => dispatch(fetchCampuses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
