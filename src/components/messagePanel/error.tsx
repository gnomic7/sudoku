import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {FormLabel} from '@material-ui/core'

const useStyles = makeStyles({
  errorLabel: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FE6B8B 80%)',
    border: 0,
    borderRadius: '.5rem',
    color: 'white',
    margin: '0 .1rem',
    padding: '0 30px',
    cursor: 'move',
    width: '100%',
    'font-family': 'Roboto',
    'font-style': 'oblique',
    'font-weight': 'bolder',
    visibility: 'hidden'
  },
});

const ErrorPanel = () => {
  const {errorLabel} = useStyles();
  return (<FormLabel className={errorLabel} id='errorLabel' />);
}

export default ErrorPanel;