import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/victim/Home';
import AddCom from './components/victim/AddCom';
import ViewCom from './components/victim/ViewCom';
import EditCom from './components/victim/EditCom';

import AddCrim from './components/admin/AddCrim';
import EditCrim from './components/admin/EditCrim';
import ViewCrim from './components/admin/ViewCrim';
import AdminHome from './components/admin/AdminHome';

function AppRouter() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Hero />} />
         <Route path="/Login" element={<Login />} />
         <Route path="/Signup" element={<Signup />} />
         <Route path="/Home" element={<Home />} />

         <Route path="/AdminHome" element={<AdminHome />} />
         
         <Route path="/AddCom" element={<AddCom />} />
         <Route path="/ViewCom" element={<ViewCom />} />
         <Route path="/EditCom/:cid" element={<EditCom />} />


         <Route path="/AddCrim" element={<AddCrim />} />
         <Route path="/ViewCrim" element={<ViewCrim />} />
         <Route path="/EditCrim/:id" element={<EditCrim />} />
         

      </Routes>
    </Router>
  );
}


export default AppRouter;
