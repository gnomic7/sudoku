import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';

const MessagePanel = ({ open, handleOpen, handleClose }) => (
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">How to Play - Sudoku?</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        1. Double-click the Squar to insert a numeric value between 1 through 9
        <br />
        2. Once the vlaue is entered - click somewhere else on the board
        <br />
        3. When the value entered already exists in the same row/column or the
        enclosing square - the square turns red 4. Fix any error - repeat from 1
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default MessagePanel;
