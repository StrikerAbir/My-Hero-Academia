import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';

const Main = () => {
    return (
        <div className="bg-yellow-300 h-96">
            <Nav></Nav>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;