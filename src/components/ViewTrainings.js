import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import moment, { isMoment } from 'moment';
import AgGridReact from 'ag-grid-react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


const useStyles = makeStyles({
    table: {
        minWidth: 450,
    },
});



export default function ViewTrainings(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const [customersTrainings, setCustomersTrainings] = useState([]);

    const fetchCustomersTrainings = () => {
        fetch(props.url)
            .then(response => response.json())
            .then(data => setCustomersTrainings(data.content))
            .catch(err => console.error(err))
    };

    const handleOpen = (data) => {
        setOpen(true);
        console.log("handleopen: " + data.content);
        fetchCustomersTrainings();

        console.log('initial: ' + customersTrainings);


    }

    const handleClose = () => {
        setOpen(false);
    }





    return (
        <div>

            <IconButton color='primary' onClick={handleOpen}>
                <ViewHeadlineIcon></ViewHeadlineIcon>
            </IconButton>



            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{props.firstname} {props.lastname} - trainings</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {console.log('dialog ' + props.url)}
                        {console.log('dialog2 ' + customersTrainings)}
                    </DialogContentText>

                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Date</TableCell>
                                    <TableCell align="left">Duration</TableCell>
                                    <TableCell align="right">Activity</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {customersTrainings.map((row) => (
                                    <TableRow key={row.date}>
                                        <TableCell >
                                            {moment(row.date).format('DD/MM/YYYY')}
                                        </TableCell>
                                        <TableCell align="left">{row.duration}&nbsp;min</TableCell>
                                        <TableCell align="right">{row.activity}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

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