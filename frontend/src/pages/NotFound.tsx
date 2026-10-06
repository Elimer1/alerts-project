import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1> 404 NotFound</h1>
      <NavLink to={"/"}>back to login page?</NavLink>
    </div>
  );
};

export default NotFound;
