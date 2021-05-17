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
import EditIcon from '@material-ui/icons/Edit';



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
        margin: theme.spacing(0),
        minWidth: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));


export default function EditCustomer(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    


    const [newCustomer, setNewCustomer] = useState({ 
        firstname: '', 
        lastname: '', 
        streetaddress: '', 
        postcode: '', 
        city: '',
        email: '', 
        phone: '', });
    

    const inputChanged = (e) => {
        setNewCustomer({ ...newCustomer, [e.target.id]: e.target.value });
    }



    const handleSave = () => {
        props.updateCustomer(props.link, newCustomer);
        setOpen(false);
    }

    const handleClickOpen = () => {
        setNewCustomer({
            firstname: props.customer.firstname,
            lastname: props.customer.lastname,
            streetaddress: props.customer.streetaddress,
            postcode: props.customer.postcode,
            city: props.customer.city,
            email: props.customer.email,
            phone: props.customer.phone
        });
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <IconButton color="primary" onClick={handleClickOpen}>
                <EditIcon />
            </IconButton>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter details
          </DialogContentText>
          <form className={classes.root} noValidate autoComplete="off">

<div>
    <TextField
        required
        id="firstname"
        label="Firstname"
        value={newCustomer.firstname}
        variant="outlined"
        onChange={inputChanged}
    />
    <TextField
        required
        id="lastname"
        label="Lastname"
        value={newCustomer.lastname}
        variant="outlined"
        onChange={inputChanged}
    />
    <TextField
        required
        id="streetaddress"
        label="Streetaddress"
        value={newCustomer.streetaddress}
        variant="outlined"
        onChange={inputChanged}
    />
    <TextField
        required
        id="postcode"
        label="Postcode"
        value={newCustomer.postcode}
        variant="outlined"
        onChange={inputChanged}
    />
    <TextField
        required
        id="city"
        label="City"
        value={newCustomer.city}
        variant="outlined"
        onChange={inputChanged}
    />
    <TextField
        required
        id="email"
        label="Email"
        value={newCustomer.email}
        variant="outlined"
        onChange={inputChanged}
    />
    <TextField
        required
        id="phone"
        label="Phone"
        value={newCustomer.phone}
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
                        Modify Entry
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
