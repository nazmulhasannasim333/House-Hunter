import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Main = () => {
    return (
        <div>
           <Navbar />
           <Outlet />
           <Footer />
        </div>
    );
};

export default Main;