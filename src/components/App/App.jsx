import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import AboutPage from '../AboutPage/AboutPage';
import HomePage from '../HomePage/HomePage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';


///////////////////////////////////App function///////////////////////////////////////
function App() {

  return (
    <Router>
      <div className='theDom'>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/home will show the home page. */}
          <Route exact path="/home">
            <HomePage />
          </Route>

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route exact path="/about">
            <AboutPage />
          </Route>

        </Switch>

        <Footer />
      </div>
    </Router>
  );
} // End of the App Function that contains all of the 
// routes utilized and displays all of them onto the dom. 

export default App;