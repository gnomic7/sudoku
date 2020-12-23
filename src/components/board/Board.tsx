import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box} from '@material-ui/core';
import {Row} from './internal/row';

const useStyles = makeStyles({
  boardClass: {
    border: '10px solid #3f51b5',
    borderRadius: '.1rem',
    borderBlockWidth: '.5rem',
    color: 'white',
    margin: '.1rem',
    'box-shadow': '5px solid rgba(170, 46, 220, 0.4), 5px 5px, rgba(40, 240, 170, 0.3) 10px 10px'
  },
});
const Board = () => {
  const {boardClass} = useStyles();
  return (<Box 
    width={1}
    height={1}
    display='flex'
    flexDirection='column'
    justifyContent='flex-start'
    className={boardClass}>
      {Array.from({length: 9}, (_, id) => (<Row key={id} rowId={(+id + 1)}/>))}
    </Box>)
};

export default Board;