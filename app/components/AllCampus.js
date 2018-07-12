import React from 'react';
import { connect } from 'react-redux';
import { fetchCampuses, selectCampus } from '../reducers';
import { Link } from 'react-router-dom';
import CampusCard from './CampusCard';

class AllCampus extends React.Component {
  componentDidMount() {
    this.props.fetchCampuses();
  }

  render() {
    const campuses = this.props.campuses;
    return (
      <div className="container">
        {campuses.length === 0 ? (
          <NoCampus />
        ) : (
          <div className="row">
            {campuses.map(campus => (
              <Link
                key={campus.id}
                to={'/campuses/' + campus.id}
                onClick={() => this.props.selectCampus(campus)}
              >
                <CampusCard {...campus} />
              </Link>
            ))}{' '}
          </div>
        )}
      </div>
    );
  }
}

const NoCampus = () => (
  <h2 className="row center header col s12 light blue-grey-text text-darken-2">
    No Campuses Exist
  </h2>
);

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
