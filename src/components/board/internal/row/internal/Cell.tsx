import React, {useMemo} from  'react';
import {Paper} from '@material-ui/core';
import { makeStyles,Theme } from '@material-ui/core/styles';
import {handleCellDoubleClick, initializeBoard} from '../../../../../helpers';

const comStyle = '3px solid #72d9ef';
let allInitVals = '';
const useStyles = makeStyles((theme: Theme)=>({
  eachCell: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    flexWrap: 'nowrap',
    border: '1px dotted #72d9ef',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  cubeBorderRight: {
    'border-right':'2px solid #72d9ef'
  },
  cubeBorderLeft: {
    'border-left':comStyle
  },
  cubeBorderTop: {
    'border-top':comStyle
  },
  cubeBorderBottom: {
    'border-bottom':comStyle
  }
  
}));

const Cell = ({id}) => {
  const val = useMemo(()=>{
    if (!allInitVals) {
      let vals = initializeBoard();
      return vals[id] || '';
    }
  },[id]);
  const [x, y] = id.split(',');
  const {eachCell, cubeBorderBottom, cubeBorderRight,cubeBorderTop, cubeBorderLeft} = useStyles();
  let suplClass = eachCell;
  if (x % 3 === 0 && y % 3 === 0) {
    suplClass = `${suplClass} ${cubeBorderBottom} ${cubeBorderRight}`;
  } else if (x % 3 === 0) {
    suplClass = `${suplClass} ${cubeBorderBottom}`;
  } else if (y % 3 === 0) {
    suplClass = `${suplClass} ${cubeBorderRight}`;
  }
  if (x%3 === 1 && y % 3 ===1) {
    suplClass = ` ${suplClass} ${cubeBorderTop} ${cubeBorderLeft}`;
  } else if (x % 3 === 1) {
    suplClass = `${suplClass} ${cubeBorderTop}`;
  } else if ( y % 3 ===1) {
    suplClass = `${suplClass} ${cubeBorderLeft}`;
  }

  return (
  <Paper 
    onDoubleClick={(e) => handleCellDoubleClick(e, id)} 
    className={suplClass ? suplClass : eachCell}  
    elevation={3} 
    id={id}
    variant="outlined" 
    square>{val || ''}</Paper>)}

export default Cell;