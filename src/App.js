import './components/App.css';
import TrainingList from './components/TrainingList';
import Appbar from './components/Appbar';
import About from './components/About';
import CustomerList from './components/CustomerList';
import LandingPage from './components/LandingPage';
import AddCustomer from './components/AddCustomer';
import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom"


function App() {

  const [trainings, setTrainings] = useState([]);

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const openSnackbar = () => {
    setOpen(true);
  }

  const closeSnackbar = () => {
    setOpen(false);
  }



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



  



  const addCustomer = (newCustomer) => {

    const requestOption = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newCustomer)
    };
    fetch('https://customerrest.herokuapp.com/api/customers', requestOption)
      .then((result) => {
        if (result.ok) {
          console.log('added customer');
          setMessage('Customer added succesfully');
          openSnackbar();
        } else {
          alert('Something wrong');
        }
        console.log(result);
      })
      .then(fetchCustomers())
      .catch(err => console.log(err));

    fetchCustomers();
  }

  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>

      <div position="static">
        <Appbar />

      </div>
      
      <div className="App">


        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/exercises" ><TrainingList
            trainings={trainings}
            setTrainings={setTrainings}
            fetchCustomers={fetchCustomers}
            addCustomer={addCustomer}
          /></Route>
          <Route path="/customers" ><AddCustomer addCustomer={addCustomer} />
          <CustomerList
            customers={customers}
            setCustomers={setCustomers}
            fetchCustomers={fetchCustomers}
            setMessage={setMessage} 
            openSnackbar={openSnackbar}/></Route>
          <Route path="/about" component={About} />
          <Route render={() => <h1>Page not found</h1>} />

        </Switch>

      </div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        message={message}
        onClose={closeSnackbar}
      />

    </div>
  );
}

export default App;
