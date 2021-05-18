import './components/App.css';
import TrainingList from './components/TrainingList';
import Appbar from './components/Appbar';
import About from './components/About';
import CustomerList from './components/CustomerList';
import LandingPage from './components/LandingPage';
import TrainerCalendar from './components/TrainerCalendar';
import AddCustomer from './components/AddCustomer';
import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import moment from 'moment';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom"


function App() {



  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const openSnackbar = () => {
    setOpen(true);
  }

  const closeSnackbar = () => {
    setOpen(false);
  }


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


  const [allTrainings, setAllTrainings] = useState([]);
  const fetchAllTrainings = () => {
    fetch('https://customerrest.herokuapp.com/gettrainings', { method: 'GET' })
      .then(response => response.json())
      .then(data => setAllTrainings(data))
      .catch(err => {
        console.error(err);
        setMessage('training data loading failed');
        openSnackbar();
      })
  };

  


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


  var [allEvents, setAllEvents] = useState([]);
  const eventParsing = () => {
    for (const [index, value] of allTrainings.entries()) {
      allEvents.push({
        'id': index,
        'title': value.activity + ' / ' + value.customer.firstname + ' ' + value.customer.lastname,
        'start': new Date(moment(value.date)),
        'end': new Date(new Date(moment(value.date)).setMinutes(new Date().getMinutes() + value.duration)),
      });
    };
  }

  const refreshCalendar = () => {
    fetchAllTrainings();
    eventParsing();
  }

  


  useEffect(() => {
    fetchCustomers();
    fetchTrainings();
    fetchAllTrainings();
    eventParsing();
  }, []);



  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>

      <div position="static">
        <Appbar />
      </div>

      <div className="App">
        <Switch>
          <Route exact path="/">
            <button onClick={() => setAllEvents([])}>refresh</button>
            <button onClick={() => refreshCalendar()}>Click to show events</button>
            <TrainerCalendar
              allEvents={allEvents}
            />
          </Route>
          <Route path="/customers" >
            <AddCustomer addCustomer={addCustomer} />
            <CustomerList
              customers={customers}
              setCustomers={setCustomers}
              fetchCustomers={fetchCustomers}
              setMessage={setMessage}
              openSnackbar={openSnackbar} />
          </Route>
          <Route path="/trainings" >
            <button onClick={() => fetchTrainings()}>refresh list</button>
            <TrainingList
              trainings={trainings}
              setTrainings={setTrainings}
              fetchCustomers={fetchCustomers}
              fetchTrainings={fetchTrainings}
              addCustomer={addCustomer}
              setMessage={setMessage}
              openSnackbar={openSnackbar}
            /></Route>
          <Route path="/about" component={About} />
          <Route render={() => <h1>Page not found</h1>} />

        </Switch>

      </div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        message={message}
        onClose={closeSnackbar}
      />

    </div>
  );
}

export default App;
