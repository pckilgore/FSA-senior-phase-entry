import React from 'react';
import { Link } from 'react-router-dom';

const Landing = props => (
  <div id="landing">
    <div className="section no-pad-bot" id="index-banner">
      <div className="container">
        <br />
        <br />
        <h1 className="header center teal-text">
          Margaret Hamilton <br /> Interplanetary Academy of JavaScript
        </h1>
        <div className="row center">
          <h5 className="header col s12 light blue-grey-text text-darken-2">
            Internal Campus Management System
          </h5>
        </div>
      </div>
    </div>

    {/* <div class="carousel">
    <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"></a>
    <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
    <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></a>
    <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"></a>
    <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"></a>
  </div>
see https://materializecss.com/carousel.html
*/}

    <div className="row center">
      <Link
        to="/students"
        id="download-button"
        className="btn-large waves-effect waves-light blue-grey"
      >
        Manage Students
      </Link>
      <br />
      <br />
      <Link
        to="/campuses"
        id="download-button"
        className="btn-large waves-effect waves-light blue-grey"
      >
        Manage Campuses
      </Link>
    </div>
    <br />
    <br />
  </div>
);

export default Landing;
