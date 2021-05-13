import './components/App.css';
import TrainingList from './components/TrainingList';
import Appbar from './components/Appbar';
import About from './components/About';
import CustomerList from './components/CustomerList';
import LandingPage from './components/LandingPage';
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom"


function App() {

  const [trainings, setTrainings] = useState([]);

  const fetchTrainings = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings')
      .then(response => response.json())
      .then(data => setTrainings(data.content))
      .catch(err => console.err(err))
  };

  const [customers, setCustomers] = useState([]);

  const fetchCustomers = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
      .then(response => response.json())
      .then(data => setCustomers(data.content))
      .catch(err => console.err(err))
  };

  useEffect(() => {
    fetchCustomers();
    fetchTrainings();
    console.log("This needs to happen only once.");
  }, []);

  return (
    <div>

      <div position="static">
        <Appbar />
      </div>

      <div className="App">


        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/exercises" ><TrainingList trainings={trainings} setTrainings={setTrainings} /></Route>
          <Route path="/customers" ><CustomerList customers={customers} setCustomers={setCustomers} /></Route>
          <Route path="/about" component={About} />
          <Route render={() => <h1>Page not found</h1>} />

        </Switch>
      </div>

    </div>
  );
}

export default App;
