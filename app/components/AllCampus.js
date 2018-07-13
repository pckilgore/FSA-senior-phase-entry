import React from 'react';
import { connect } from 'react-redux';
import { fetchCampuses, selectCampus } from '../reducers';
import CampusList from './CampusList';
import NothingHere from './NothingHere';

class AllCampus extends React.Component {
  componentDidMount() {
    this.props.fetchCampuses();
  }

  render() {
    const campuses = this.props.campuses;
    console.log('HERE:', campuses);
    return (
      <div className="container">
        {campuses.length === 0 ? (
          <NothingHere message="No Campuses Registered" />
        ) : (
          <CampusList
            campuses={campuses}
            selectCampus={this.props.selectCampus}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  campuses: state.campuses,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchCampuses: () => dispatch(fetchCampuses()),
    selectCampus: campus => dispatch(selectCampus(campus)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCampus);
