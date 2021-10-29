import React from "react";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./css/header.css";

export default function Admin() {
  const gotoHome = () => {
    
  }
  return (
    <div className = "header-first">
      <div className = "header-second" onClick = {()=>gotoHome()}>suitUp</div>
      <div className = "header-third">
        <div className = "header-four">Home</div>
        <div className = "header-four">Sign In</div>
        <div className = "header-four">Sign Up</div>
      </div>
    </div>
  );
}