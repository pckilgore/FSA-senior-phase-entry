import React from 'react';
import StudentForm from './StudentForm';
import { connect } from 'react-redux';
import { addStudent, fetchCampuses } from '../reducers';

class AddStudent extends React.Component {
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
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addStudent({ ...this.state });
    setTimeout(
      () => this.props.history.push(`/students/${this.props.nextStudent}`),
      1000
    );
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <h3>Add New Student </h3>
        <div className="card">
          <div className="card-content">
            <StudentForm
              student={this.state}
              submitFn={this.handleSubmit}
              changeFn={this.handleChange}
              campuses={this.props.campuses}
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
  nextStudent: state.nextStudent,
});

const mapDispatchToProps = dispatch => ({
  addStudent: student => dispatch(addStudent(student)),
  fetchCampuses: () => dispatch(fetchCampuses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
