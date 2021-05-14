import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '22ch',
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


export default function AddCustomers(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    


    const [newCustomer, setnewCustomer] = useState({ firstname: '', 
    lastname: '', 
    streetaddress: '', 
    postnumber: '', 
    city: '', 
    email: '',
    phone: '' })

    const inputChanged = (e) => {
        setnewCustomer({ ...newCustomer, [e.target.id]: e.target.value });
    }

    const handleSave = () => {
        props.addCustomer(newCustomer);
        setOpen(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter details
          </DialogContentText>
          <form noValidate autoComplete="off">

<div>
    <TextField
        required
        id="firstname"
        label="Firstname"
        variant="outlined"
        onChange={inputChanged}
    />
    <TextField
        required
        id="lastname"
        label="Lastname"
        variant="outlined"
        onChange={inputChanged}
    />
    <TextField
        required
        id="streetaddress"
        label="Streetaddress"
        variant="outlined"
        onChange={inputChanged}
    />
    <TextField
        required
        id="postnumber"
        label="Postnumber"
        variant="outlined"
        onChange={inputChanged}
    />
    <TextField
        required
        id="city"
        label="City"
        variant="outlined"
        onChange={inputChanged}
    />
    <TextField
        required
        id="email"
        label="Email"
        variant="outlined"
        onChange={inputChanged}
    />
    <TextField
    required
    id="phone"
    label="Phone"
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
                        Add Customer
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
