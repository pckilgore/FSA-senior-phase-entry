import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Landing from './Landing';
import NavBar from './NavBar';
import Footer from './Footer';
import NotFound from './NotFound';

import AllCampus from './AllCampus';
import SingleCampus from './SingleCampus';
import AddCampus from './AddCampus';
import EditCampus from './EditCampus';

import AllStudent from './AllStudent';
import SingleStudent from './SingleStudent';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';

const Main = props => (
  <div>
    <NavBar />
    <Switch>
      {/* Home */}
      <Route exact path="/" component={Landing} />
      {/* Campus Routes */}
      <Route exact strict path="/campuses/" component={AllCampus} />
      <Route exact strict path="/campuses/add" component={AddCampus} />
      <Route exact strict path="/campuses/edit" component={EditCampus} />
      <Route path="/campuses/:campus" component={SingleCampus} />
      {/* Students Routes */}
      <Route exact strict path="/students/" component={AllStudent} />
      <Route exact strict path="/students/add" component={AddStudent} />
      <Route exact strict path="/students/edit" component={EditStudent} />
      <Route path="/students/:student" component={SingleStudent} />
      {/* Redirects and Catchalls */}
      <Redirect exact strict path="/campuses" to="/campuses/" />
      <Redirect exact strict path="/students" to="/students/" />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default Main;
