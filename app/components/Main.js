import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AllCampus from './AllCampus';
import AllStudent from './AllStudent';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';

const Home = props => (
  <div>
    <BrowserRouter>
      <AllCampus />
      <AllStudent />
      <SingleCampus />
      <SingleStudent />
    </BrowserRouter>
  </div>
);

export default Home;
