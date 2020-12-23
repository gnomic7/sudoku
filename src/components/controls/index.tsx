import  React from "react";
import {Fab, Box} from '@material-ui/core';
import {Undo as UndoIcon, Redo as RedoIcon, Clear as ClearIcon} from '@material-ui/icons';

const Controls = () => (
<Box width={1} p='.1rem' display='flex' flexDirection='row' justifyContent='center'>
  <Fab color='primary' size='small'><UndoIcon/></Fab>
  <Fab color='secondary' size='small'><ClearIcon/></Fab>
  <Fab color='primary' size='small'><RedoIcon/></Fab>
</Box>
);
export default Controls;