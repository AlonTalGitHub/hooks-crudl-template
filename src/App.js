import React from 'react';
import { Router, Switch, Route } from 'react-router';
import history from './history';

import HomePage from './pages/HomePage.js';
import ContactPage from './pages/contact/ContactPage';
import ContactEdit from './cmps/ContactEdit';
import ContactDetailsPage from './pages/contact/ContactDetailsPage';

import './assets/styles/App.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/contact" component={ContactPage} exact/>
          <Route path="/contact/new" component={ContactEdit} />
          <Route path="/contact/edit/:id?" component={ContactEdit} />
          <Route path="/contact/:id" component={ContactDetailsPage} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
