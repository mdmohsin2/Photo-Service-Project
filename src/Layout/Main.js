import React from 'react';
import Navbar from '../Page/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;