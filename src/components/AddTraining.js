import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '97%',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '22ch',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));


export default function AddTraining(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);




    const [newTraining, setNewTraining] = useState({
        date: '',
        activity: '',
        duration: '',
        customer: props.link,
    })

    const inputChanged = (e) => {
        setNewTraining({ ...newTraining, [e.target.id]: e.target.value });
    }

    const handleSave = () => {
        
        props.addTraining(newTraining);
        setOpen(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        
        console.log((newTraining.date));
        console.log((newTraining.customer));
        setOpen(false);
    }

    return (
        <div>
           

            <IconButton color="primary" onClick={handleClickOpen}>
                <AddIcon />
            </IconButton>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Training</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter details
          </DialogContentText>
                    <form className={classes.root} noValidate autoComplete="off">

                        <div>
                            <TextField
                                required
                                id="date"
                                label="Time YYYY.MM.DD HH:MM"
                                variant="outlined"
                                onChange={inputChanged}
                            />
                            <TextField
                                required
                                id="activity"
                                label="Activity"
                                variant="outlined"
                                onChange={inputChanged}
                            />
                            <TextField
                                required
                                id="duration"
                                label="Duration"
                                variant="outlined"
                                onChange={inputChanged}
                            />
                            
                        </div>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSave} color="primary">
                        Add Training
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
