import React from "react";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header.js";
import Footer from "components/Footer.js";
import FirstLetter from "components/FirstLetter.js";
import NewProduct from "components/newProduct.js";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

const useStyles = makeStyles(styles);

export default function Admin() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Header></Header>
      <div style={first}>
        <FirstLetter></FirstLetter>
        <NewProduct></NewProduct>
      </div>
      <Footer></Footer>
    </div>
  );
}

const first = {
  paddingTop : '8%',
  paddingLeft : '8%',
  paddingRight : '8%',
  // marginTop : "3%"
}