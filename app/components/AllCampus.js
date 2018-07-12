import React from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers';
import { Link } from 'react-router-dom';

class AllCampus extends React.Component {
  componentDidMount() {
    this.props.fetchCampuses();
  }

  render() {
    const campuses = this.props.campuses;
    return (
      <div className="container">
        <ul>
          {campuses.length === 0 ? (
            <h2 className="row center header col s12 light blue-grey-text text-darken-2">
              No Campuses Exist
            </h2>
          ) : (
            campuses.map(campus => (
              <li key={campus.id}>
                <Link to={`${this.props.match.url + campus.id}`}>
                  {campus.name}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campuses: state.campuses,
});

const mapDispatchToProps = dispatch => {
  return { fetchCampuses: () => dispatch(fetchCampuses()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCampus);
