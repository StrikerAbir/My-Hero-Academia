import React from "react";
import { NavLink } from "react-router-dom";

const Links = ({ route }) => {
  const { path, name } = route;
  const activeStyle = {
    border: "2px solid black",
    borderRadius: "8px",
    padding: "10px 20px",
    backgroundColor: "#e92b19",
    color: "white",
  };
  return (
    <div className="lg:pl-8 font-bold my-7 flex lg:block justify-center">
      <NavLink
        to={path}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default Links;
