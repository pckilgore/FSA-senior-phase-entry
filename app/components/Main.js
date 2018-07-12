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
      <Route exact strict path="/campuses/" component={AllCampus} />
      <Route path="/campuses/:campus" component={SingleCampus} />
      <Route exact strict path="/students/" component={AllStudent} />
      <Route path="/students/:student" component={SingleStudent} />
      <Redirect exact strict path="/campuses" to="/campuses/" />
      <Redirect exact strict path="/students" to="/students/" />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default Main;
