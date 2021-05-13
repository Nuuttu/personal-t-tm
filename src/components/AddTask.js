import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export default function AddTask() {
    const [open, setOpen] = React.useState(false);


    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }



    return (
        <div>

            <Button variant="outlined" color="primary" onClick={handleOpen}>
                Add Task
            </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add a task</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter details of the task
                </DialogContentText>
                    ASDASDASD
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Add Car
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}