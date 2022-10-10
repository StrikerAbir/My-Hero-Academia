import React from "react";
import Links from "./Links/Links";
import logo from "../../images/logo.png";
const Nav = () => {
  const routes = [
    { id: 1, name: "Quiz Topics", path: "/" },
    { id: 2, name: "Departments", path: "/departments" },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "Blog", path: "/blog" },
  ];
  return (
    <div className="bg-yellow-400 text-black md:flex items-center justify-around py-3 shadow-lg">
      <div>
        <img className='w-48' src={logo} alt="" />
      </div>
      <nav>
        <ul className='md:flex'>
          {routes.map((route) => (
            <Links key={route.id} route={route}></Links>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
