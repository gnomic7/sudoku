import React from 'react';
import {Box} from '@material-ui/core';

import {Cell} from './internal';

const Row = ({rowId}) => <Box 
  display='flex'
  flexDirection='row'
  justifyContent='space-evenly'
  alignItems='center'
  alignContent='center'
  width={1}
  height="75px"
>
  {Array.from({length: 9 }, (_, id) => (<Cell key={id} id={`${(+id + 1)},${rowId}`}/>))}
</Box>

export default Row;