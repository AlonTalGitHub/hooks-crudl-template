import React from 'react';
import { Router, Switch, Route } from 'react-router';
import history from './history';

import HomePage from './pages/HomePage.js';
import ContactPage from './pages/ContactPage';
import ContactDetails from './pages/ContactDetails'

import './assets/styles/App.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/contact" component={ContactPage} exact/>
          <Route path="/contact/:id" component={ContactDetails} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
