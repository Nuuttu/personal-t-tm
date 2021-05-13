import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';



export default function TrainingList(props) {
 

const [t, setT] = useState(props.trainings);


    const [rowData, setRowData] = useState([]);

    const columns = [
        { field: 'date', sortable: true, filter: true, width: 200, cellRenderer: (data) => {
            return moment(data.createdAt).format('MM/DD/YYYY')
        } },
        { field: 'duration', sortable: true, filter: true },
        { field: 'activity', sortable: true, filter: true },
        { field: 'links.2.href', sortable: true, filter: true, width: 500 }
    ]
    

    return(
    <div>
       
        
        <div className="ag-theme-material"
                style={{ height: 670, maxWidth: '90%', margin: 'auto', padding: '10px' }}>
        <AgGridReact
            rowData={props.trainings}
            columnDefs={columns}

            floatingFilter={true}
                    pagination={true}
                    paginationPageSize={10}
        />
        </div>
     
    </div>
    )
}