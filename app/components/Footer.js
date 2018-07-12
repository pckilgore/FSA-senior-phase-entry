import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => (
  <footer className="page-footer teal">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">About Margaret Hamilton</h5>
          <p className="grey-text text-lighten-4">
            We are a team of javascript educators working to give our students
            the opportunity for a full time job in Javascript. We use these
            systems to manage our campuses faster than the speed of light.
            Because pair programming across an eight to twenty minute
            interplanetary ping is just painful. Boy are we going to be doing a
            lot of caching in the future. Seriously.
          </p>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        Made with ♥ by Patrick Kilgore @ Fullstack Academy CH-18-06
      </div>
    </div>
  </footer>
);

export default Footer;
