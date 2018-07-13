import React from 'react';
import CampusForm from './CampusForm';
import { connect } from 'react-redux';
import { editCampus } from '../reducers';

class EditCampus extends React.Component {
  // Keeps local state with new data until it is committed.
  state = {
    name: '',
    address: '',
    imageUrl: '',
    description: '',
  };

  componentDidMount() {
    this.setState(() => ({ ...this.props.selectedCampus }));
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.editCampus({ ...this.state });
    this.props.history.push(`/campuses/${this.props.selectedCampus.id}`);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if (this.props.selectedCampus.id === 0) this.props.history.push('/campuses/');
    return (
      <div className="container">
        <h3>Edit {this.props.selectedCampus.name} Campus </h3>
        <div className="card">
          <div className="card-content">
            <CampusForm
              campus={this.state}
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
  selectedCampus: state.selectedCampus,
  nextCampus: state.nextCampus,
});

const mapDispatchToProps = dispatch => ({
  editCampus: campus => dispatch(editCampus(campus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);
