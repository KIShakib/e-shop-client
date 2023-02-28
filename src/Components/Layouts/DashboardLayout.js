import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../Pages/Dashboard/DashboardNavbar/DashboardNavbar';

const DashboardLayout = () => {
    return (
        <div className='lg:flex'>
            <DashboardNavbar />
            <Outlet />
        </div>
    );
};

export default DashboardLayout;