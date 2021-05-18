import React, { useState, useEffect } from 'react';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditCustomer from './EditCustomer';
import AddTraining from './AddTraining';
import ViewTrainings from './ViewTrainings';


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { PinDropSharp } from '@material-ui/icons';





export default function CustomerList(props) {


    const columns = [
        { field: 'firstname', sortable: true, filter: true, width: 120 },
        { field: 'lastname', sortable: true, filter: true, width: 120 },
        { field: 'streetaddress', sortable: true, filter: true },
        { field: 'postcode', sortable: true, filter: true, width: 120 },
        { field: 'city', sortable: true, filter: true },
        { field: 'email', sortable: true, filter: true },
        { field: 'phone', sortable: true, filter: true, width: 130 },
        {
            headerName: "Trainings",
            field: 'links[2].href',
            width: 110,
            cellRendererFramework: function (params) {
                return (

                    <ViewTrainings
                        url={params.data.links[2].href}
                        lastname={params.data.lastname}
                        firstname={params.data.firstname}
                    />
                )}
        },
        {
            headerName: "",
            width: 70,
            cellRendererFramework: function (params) {
                return (
                <AddTraining
                customer={params.data.firstname + ' ' + params.data.lastname}
                link={params.data.links[1].href}
                addTraining={addTraining}
                />
                )}
        },
        {
            headerName: "",
            field: '_links.self.href',
            width: 70,
            cellRendererFramework: params => 
            <EditCustomer
            link={params.data.links[0].href} 
            customer={params.data} 
            updateCustomer={updateCustomer} />

        },
        {
            headerName: "",
            width: 70,
            cellRendererFramework: function (params) {
                return <IconButton color='secondary' onClick={() => (deleteCustomer(params.data.links[0].href))}>
                    <DeleteIcon></DeleteIcon>
                </IconButton>
            }
        },

    ]



    const deleteCustomer = (url) => {
        if (window.confirm('Deleting customer?')) {
            const requestOption = {
                method: 'DELETE'
            };

            fetch(url, requestOption)
                .then(response => {
                    if (response.ok) {
                        props.fetchCustomers();
                        props.setMessage('Customer deleted');
                        props.openSnackbar();
                    }
                    else {
                        alert('Something failed...');
                    }
                })
                .catch(err => console.error(err))
        }


    }

    const updateCustomer = (url, updatedCustomer) => {
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(updatedCustomer),
            headers: { 'Content-type': 'application/json' }
        })
            .then(_ => {
                props.fetchCustomers();
                props.setMessage('Customer updated');
                props.openSnackbar();
            })
            .catch(err => console.error(err))
    }


    const addTraining = (newTraining) => {
        const requestOption = {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(newTraining)
        };
        console.log(newTraining);
        fetch('https://customerrest.herokuapp.com/api/trainings', requestOption)
          .then((result) => {
            if (result.ok) {
              console.log('added training');
              props.setMessage('Training added succesfully');
              props.openSnackbar();
            } else {
              alert('Something wrong while adding training');
            }
            console.log(result);
          })
          .then(props.fetchCustomers())
          .catch(err => console.error(err));
    
      }

      


    return (
        <div>


            <div className="ag-theme-material"
                style={{ height: 670, width: '95%', margin: 'auto', padding: '10px' }}>
                <AgGridReact
                    rowData={props.customers}
                    columnDefs={columns}

                    floatingFilter={true}
                    pagination={true}
                    paginationPageSize={10}
                />
            </div>


        </div>
    )
}