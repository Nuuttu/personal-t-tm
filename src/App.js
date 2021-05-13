import './components/App.css';
import TrainingList from './components/TrainingList';
import Appbar from './components/Appbar';
import About from './components/About';
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom"


function App() {
  return (
    <div>

        <div position="static">
          <Appbar />
        </div>

    <div className="App">
      

      <Switch>
              <Route exact path="/" component={TrainingList} />
              <Route path="/about" component={About} />
              <Route path="/types" component={() => <h1>Page</h1>} />
              <Route path="/spinner" component={() => <h1>Page</h1>} />
              <Route path="/drawer" component={() => <h1>Page</h1>} />
              <Route render={() => <h1>Page not found</h1>} />

            </Switch>
      </div>
    </div>
  );
}

export default App;
