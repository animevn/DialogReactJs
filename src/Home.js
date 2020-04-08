import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
  // const top = 50 + rand();
  // const left = 50 + rand();

  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const base = {initial: "Waiting", cancel: "Cancel", ok: "OK"};

function Home() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [message, setMessage] = useState(base.initial);
  const [open, setOpen] = useState(false);

  function onLaunchClick(event) {
    event.preventDefault();
    setMessage(base.initial);
    setOpen(true);
  }

  function onOkClick(event) {
    event.preventDefault();
    setMessage(base.ok);
    setOpen(false);
  }

  function onCancelClick(event) {
    event.preventDefault();
    setMessage(base.cancel);
    setOpen(false);
  }

  function handleClose() {
    setOpen(false);
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <Box mt={5} display="flex" flexDirection="row" justifyContent="space-around">
        <Button variant="contained" color="primary" onClick={onOkClick} style={{"width":"5rem"}}>
          OK
        </Button>
        <Button variant="contained" color="primary" onClick={onCancelClick} style={{"width":"5rem"}}>
          Cancel
        </Button>
      </Box>
    </div>
  );

  return (
    <Grid container direction="column" justify="center" alignItems="center">

      <Box mt={5}>
        <Typography variant="h3">{message}</Typography>
      </Box>

      <Box mt={5}>
        <Button variant="contained" color="primary" onClick={onLaunchClick}>
          Launch demo modal
        </Button>
      </Box>
      
      <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title"
             aria-describedby="simple-modal-description">
        {body}
      </Modal>

    </Grid>
  )
}

export default Home;