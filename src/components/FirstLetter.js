import React from "react";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./css/firstLetter.css";

export default function Admin() {
  return (
    <div className = "firstletter-big">
      <h1 className="firstletter-first">Welcome to <span className="firstletter-second">suitUp</span> an online market place for your used Racing Suit!</h1>
      <p className="firstletter-third">Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
}
