import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';



export default function CustomerList(props) {
 

    const [rowData, setRowData] = useState([]);

    const columns = [
        { field: 'firstname', sortable: true, filter: true, width: 120 },
        { field: 'lastname', sortable: true, filter: true, width: 120 },
        { field: 'streetaddress', sortable: true, filter: true },
        { field: 'postcode', sortable: true, filter: true, width: 100 },
        { field: 'city', sortable: true, filter: true },
        { field: 'email', sortable: true, filter: true },
        { field: 'phone', sortable: true, filter: true },
        {
            headerName: "",
            width: 70,
            cellRendererFramework: function (params) {
                return <button>Moi</button>
            }
        }
    ]
    

    return(
    <div>
       
        
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