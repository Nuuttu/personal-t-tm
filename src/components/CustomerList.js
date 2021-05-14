import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import AddCustomer from './AddCustomer';

import ViewTrainings, { handleHandleOpen } from './ViewTrainings';


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';





export default function CustomerList(props) {

    const [customersUrl, setCustomersUrl] = useState('');
    const [rowData, setRowData] = useState([]);
    const [customersTrainings, setCustomersTrainings] = useState(props);


    const columns = [
        { field: 'firstname', sortable: true, filter: true, width: 120 },
        { field: 'lastname', sortable: true, filter: true, width: 120 },
        { field: 'streetaddress', sortable: true, filter: true },
        { field: 'postcode', sortable: true, filter: true, width: 120 },
        { field: 'city', sortable: true, filter: true },
        { field: 'email', sortable: true, filter: true },
        { field: 'phone', sortable: true, filter: true },
        {
            headerName: "Trainings",
            field: 'links[2].href',
            width: 120,
            cellRendererFramework: function (params) {
                return (
                   
                <ViewTrainings
                 url={params.data.links[2].href}
                 lastname={params.data.lastname}
                 firstname={params.data.firstname} />
                )
            }
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