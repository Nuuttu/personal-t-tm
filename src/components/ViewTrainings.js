import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import moment from 'moment';
import AgGridReact from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export default function ViewTrainings(props) {
    const [open, setOpen] = React.useState(false);

    const [customersTrainings, setCustomersTrainings] = useState([]);

    const handleOpen = () => {
        setOpen(true);


        const fetchCustomersTrainings = () => {
            fetch(props.url)
                .then(response => response.json())
                .then(data => setCustomersTrainings(data.content))
                .catch(err => console.err(err))
        };
    }



const handleClose = () => {
    setOpen(false);
}


const columns = [
    { field: 'date', sortable: true, filter: true, width: 200, cellRenderer: (data) => {
        return moment(data.createdAt).format('MM/DD/YYYY')
    } },
    { field: 'duration', sortable: true, filter: true },
    { field: 'activity', sortable: true, filter: true },
    { field: 'links.2.href', sortable: true, filter: true, width: 500 }
]


return (
    <div>

        <IconButton color='primary' onClick={handleOpen}>
            <ViewHeadlineIcon></ViewHeadlineIcon>

        </IconButton>



        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add a task</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.url}
                    {console.log(props.url)}
                </DialogContentText>
            </DialogContent>
          

            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
          </Button>
                <Button onClick={handleClose} color="primary">
                    Okay
          </Button>
            </DialogActions>
        </Dialog>
    </div>
)
}