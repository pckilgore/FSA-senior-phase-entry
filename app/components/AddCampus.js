import React from 'react';
import CampusForm from './CampusForm';
import { connect } from 'react-redux';
import { addCampus } from '../reducers';

class AddCampus extends React.Component {
  // Keeps local state with new data until it is committed.
  state = {
    name: '',
    address: '',
    imageUrl: '',
    description: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addCampus({ ...this.state });
    setTimeout(
      () => this.props.history.push(`/campuses/${this.props.nextCampus}`),
      1000
    );
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <h3>Add New Campus </h3>
        <div className="card">
          <div className="card-content">
            <CampusForm
              campus={this.state}
              submitFn={this.handleSubmit}
              changeFn={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  nextCampus: state.nextCampus,
});

const mapDispatchToProps = dispatch => ({
  addCampus: campus => dispatch(addCampus(campus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus);
