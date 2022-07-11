import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';

import AnimalDetail from '../AnimalDetail/AnimalDetail.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>SPAs!</h1>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/plants">Plants</Link>
          </li>
          <li>
            <Link to="/animals">Animals</Link>
          </li>
        </ul>

        <Route path = "/" exact>
          <Home />
        </Route>

        <Route path = "/plants">
          <Plants />
        </Route>

        <Route path = "/animals" exact>
          <Animals />
        </Route>

        <Route path = "/animals/:id" exact>
          <AnimalDetail />
        </Route>

      </div>
    </Router>
  );
}

export default App;
