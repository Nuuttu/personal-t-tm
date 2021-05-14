import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import AddCustomer from './AddCustomer';

import ViewTrainings from './ViewTrainings';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';





export default function CustomerList(props) {


    const [rowData, setRowData] = useState([]);
    const [customersTrainings, setCustomersTrainings] = useState(props);


    const columns = [
        { field: 'firstname', sortable: true, filter: true, width: 120 },
        { field: 'lastname', sortable: true, filter: true, width: 120 },
        { field: 'streetaddress', sortable: true, filter: true },
        { field: 'postcode', sortable: true, filter: true, width: 100 },
        { field: 'city', sortable: true, filter: true },
        { field: 'email', sortable: true, filter: true },
        { field: 'phone', sortable: true, filter: true },
        {
            headerName: "Trainings",
            width: 120,
            cellRendererFramework: function (params) {
                return (
                    <IconButton color='primary' onClick={() => (console.log(params.data.links[2].href))}>
                        <ViewHeadlineIcon></ViewHeadlineIcon>
                    </IconButton>
                )
            }
        },
        {
            headerName: "",
            width: 70,
            cellRendererFramework: function (params) {
                return <IconButton color='secondary' onClick={() => (console.log("Moi"))}>
                    <DeleteIcon></DeleteIcon>
                </IconButton>
            }
        },

    ]


    return (
        <div>

            <ViewTrainings url='https://customerrest.herokuapp.com/api/customers/107/trainings' />
            <div className="ag-theme-material"
                style={{ height: 670, width: '90%', margin: 'auto', padding: '10px' }}>
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