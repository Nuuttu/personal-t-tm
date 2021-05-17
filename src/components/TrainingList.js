import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';



export default function TrainingList(props) {
 

    const columns = [
        { field: 'date', sortable: true, filter: true, width: 200, cellRenderer: (data) => {
            return moment(data.createdAt).format('DD/MM/YYYY')
        } },
        { field: 'duration', sortable: true, filter: true },
        { field: 'activity', sortable: true, filter: true },
        {
            headerName: "",
            width: 70,
            cellRendererFramework: function (params) {
                return <IconButton color='secondary' onClick={() => (deleteTraining(params.data.links[1].href))}>
                    <DeleteIcon></DeleteIcon>
                </IconButton>
            }
        }
    ]
    


    const deleteTraining = (url) => {
        if (window.confirm('Deleting training?')) {
            const requestOption = {
                method: 'DELETE'
            };

            fetch(url, requestOption)
                .then(response => {
                    if (response.ok) {
                        props.fetchTrainings();
                        props.setMessage('Training deleted');
                        props.openSnackbar();
                    }
                    else {
                        alert('Something failed...');
                    }
                })
                .catch(err => console.error(err))
        }


    }


    
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