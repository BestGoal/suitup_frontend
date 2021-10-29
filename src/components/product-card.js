import React from "react";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./css/newproduct.css";

import Card from "interface/Card/Card.js";
import CardHeader from "interface/Card/CardHeader.js";
import Badge from '@material-ui/core/Badge';

import img1 from "assets/img/sidebar-1.jpg";
import buyed from "assets/img/buyedimage.png";

export default function Admin() {
  return (
    <Card className = "card">
      <img src = {img1} alt = '140 * 120' className = "card-img"></img>
      <CardHeader>
        <p className = "card-p"> Vyacheslav </p>
        <Badge  className = "card-badge" badgeContent={'$100'} color="primary"></Badge>
      </CardHeader>
      <a href = "/#" target = '_black' >100</a>
      <img alt ='...' className = "product-card-buyed-image" src = {buyed}></img>
    </Card>
  );
}