import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AllCampus from './AllCampus';
import AllStudent from './AllStudent';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import NavBar from './NavBar';
import Landing from './Landing';
import Footer from './Footer';
import NotFound from './NotFound';

const Main = props => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/campuses/" component={AllCampus} />
      <Route path="/campuses/:campus" component={SingleCampus} />
      <Route exact path="/students/" component={AllStudent} />
      <Route path="/students/:student" component={SingleStudent} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default Main;
