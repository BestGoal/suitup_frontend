import React from "react";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./css/newproduct.css";

import img1 from "assets/img/sidebar-1.jpg";
import buyed from "assets/img/buyedimage.png";

export default function Admin() {
  return (
    <div>
      <div>
        <img src = {img1} alt = '140 * 120' className = "modal-img"></img>
      </div>
      <div className = "product-modal-setting">
        <div className = "product-modal-name">Vyacheslav</div>
        <div className = "product-modal-badge">100$</div>
        <a className = "product-modal-count" href = "/#">100</a>
      </div>
      <img alt = '...' className = "product-modal-buyed-image" src = {buyed}></img>
    </div>
  );
}