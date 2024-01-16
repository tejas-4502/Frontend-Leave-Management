import React from 'react'

import Home from '../common/home';
import Login from '../common/login';
import Register from '../common/register';
import ApplyLeave from '../user/applyLeave';
import MyLeave from '../user/myleave';
import Employees from '../admin/employees';
import Leavetype from '../admin/leavetype';
import Leaverequest from '../admin/leaverequest';
import { Navigate } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Routesnav() {
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    const loggedInAdmin = JSON.parse(sessionStorage.getItem('loggedInAdmin'));
    return (
        <>
            <Router>
                {/* home navigation routes */}
                <Routes>
                    <Route
                        path="/homeadmin"
                        element={loggedInAdmin ? <Home admin /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/homeuser"
                        element={loggedInUser ? <Home user /> : <Navigate to="/login" />}
                    />

                    {/* common pages routes */}
                    <Route path="/home" element={<Home />} />
                    <Route path="" element={<Home />} />

                    {/* login and register routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* user pages routes */}
                    <Route
                        path="/applyleave"
                        element={loggedInUser ? <ApplyLeave /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/myleave"
                        element={loggedInUser ? <MyLeave /> : <Navigate to="/login" />}
                    />

                    {/* admin pages routes */}
                    <Route
                        path="/employees"
                        element={loggedInAdmin ? <Employees /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/leavetype"
                        element={loggedInAdmin ? <Leavetype /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/leaverequest"
                        element={loggedInAdmin ? <Leaverequest /> : <Navigate to="/login" />}
                    />
                </Routes>
            </Router>
        </>
    )
}
