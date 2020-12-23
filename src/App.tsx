import React from 'react';
import { Typography, Box } from "@material-ui/core";
import 'fontsource-roboto';
import './App.css';
import {Board,  ErrorPanel} from './components';
const App = () => (
    <div className="App-header">
      <Typography variant='h5'>
        <Box fontStyle='bolder' fontFamily="Monospace" letterSpacing={6}>
          SUDOKO BOARD
        </Box>
      </Typography>
      {/* <header>
        <Controls/>
      </header> */}
      <section className="App-body">
        <Box 
          display='flex' 
          flexDirection='column' 
          justifyContent='center'
          alignItems='center'
        > 
          <aside><ErrorPanel/></aside>
          <Box
            width={1}
            height={1}
            display='flex' 
            flexDirection='column' 
            justifyContent='center'
            alignItems='center'
          >
            <Board/>
          </Box>
      </Box>
      </section>
    </div>
  );

export default App;
