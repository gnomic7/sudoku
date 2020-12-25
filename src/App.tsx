import React, { useState } from 'react';
import { Typography, Box, Fab } from '@material-ui/core';
import { HelpOutlineOutlined as InfoIcon } from '@material-ui/icons';
import 'fontsource-roboto';
import './App.css';

import { Board, ErrorPanel, MessagePanel } from './components';
const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App-header">
      <Typography variant="h5">
        <Box
          width={1}
          p=".1rem"
          display="flex"
          flexDirection="col"
          justifyContent="center"
          alignItems="space-evenly"
        >
          <Box
            width={1}
            p=".1rem"
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            <Box
              fontStyle="bolder"
              fontFamily="Monospace"
              letterSpacing={6}
              m={1}
            >
              SUDOKO BOARD
            </Box>
            <Fab color="primary" size="small" onClick={handleOpen}>
              <InfoIcon fontSize="small" />
            </Fab>
          </Box>
          <MessagePanel
            open={open}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />
        </Box>
      </Typography>
      {/* <header>
        <Controls/>
      </header> */}
      <section className="App-body">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <aside>
            <ErrorPanel />
          </aside>
          <Box
            width={1}
            height={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Board />
          </Box>
        </Box>
      </section>
    </div>
  );
};

export default App;
