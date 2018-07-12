import React from 'react';
import { Switch } from 'react-router-dom';
import AllCampus from './AllCampus';
import AllStudent from './AllStudent';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import NavBar from './NavBar';
import Landing from './Landing';
import Footer from './Footer';

const Main = props => (
  <div>
    <NavBar />
    <Switch>
      <Landing />
      {/* <AllCampus />
      <AllStudent />
      <SingleStudent />
      <SingleCampus /> */}
    </Switch>
    <Footer />
  </div>
);

export default Main;
