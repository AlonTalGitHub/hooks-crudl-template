import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import history from './history';

import Home from './pages/Home.js';
import ContactPage from './pages/ContactPage';
import ContactDetails from './pages/ContactDetails'


import './App.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={ContactPage} exact/>
          <Route path="/contact/:id" component={ContactDetails} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
