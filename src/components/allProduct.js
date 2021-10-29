import React from "react";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./css/newproduct.css";

import GridItem from "interface/Grid/GridItem.js";
import GridContainer from "interface/Grid/GridContainer.js";

import { makeStyles } from "@material-ui/core/styles";

import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import Button from '@material-ui/core/Button';
import Product_Modal from './product-modal.js';
import Product_card from './product-card.js';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function Admin() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className = "product-first" variant="contained" color="secondary">
        New Product
      </Button>
        <GridContainer>
          <GridItem xs={12} sm={6} md={2} onClick={handleOpen}>
            <Product_card></Product_card>
          </GridItem>
        </GridContainer>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          className="modal"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <Product_Modal></Product_Modal>
              <div className = "modal-footer">
                <Button onClick = {()=>handleClose()} className = "modal-button-cancel" variant="contained" color="secondary">
                  Cancel
                </Button>
                <Button onClick = {()=>handleClose()} className = "modal-button-buy" variant="contained" color="primary">
                  Buy
                </Button>
                <Button onClick = {()=>handleClose()} className = "modal-button-buy" variant="contained" color="primary">
                  Delete
                </Button>
                <Button onClick = {()=>handleClose()} className = "modal-button-buy" variant="contained" color="primary">
                  Update
                </Button>
              </div>
            </div>
          </Fade>
        </Modal>
    </div>
  );
}