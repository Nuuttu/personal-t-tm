import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"
import '@fontsource/roboto';

const useStyles = makeStyles((theme) => ({
  
  root: {
    '& > *': {
      margin: theme.spacing(0),
    },
    flexGrow: 1.4,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));




export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography className={classes.title} variant="h6" noWrap>
            The PersonalTrainer
          </Typography>

          <div className={classes.root}>
            <Typography className={classes.title} variant="h6" noWrap>
              <Link to="/">
                <Button variant="contained" color="default">HOME</Button>
              </Link>
              <Link to="/exercises">
                <Button variant="contained" color="default">Exercises</Button>
              </Link>
              <Link to="/customers">
                <Button variant="contained" color="default">Customers</Button>
              </Link>
              <Link to="/about">
                <Button variant="contained" color="default">About</Button>
              </Link>
              
            </Typography>

          </div>

          
        </Toolbar>

      </AppBar>
    </div>
  );
}