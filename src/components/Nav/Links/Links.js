import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = ({ route }) => {
    const { path, name } = route;
    const activeStyle = {
      textDecoration: "underline",
    };
    return (
      <div className="pl-8 text-lg font-bold">
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