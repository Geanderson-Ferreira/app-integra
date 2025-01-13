import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/NavBar";
import Quartos from "../pages/Quartos"
import Calendar from "../pages/Calendar";
import Chamados from "../pages/Chamados";


function PrivateRoutes(){

    return(

    
        <Router> 
    
          {<Navbar />}  
          
          
          <Routes>
    
            <Route path="*" element={<Navigate to="/index" />} />
            <Route path="/login" element={<Login/>} />
    
            
            <Route
              path="/dashboard"
              element={
                  <Dashboard/>
              }
            />
    
    
              <Route
              path="/quartos"
              element={
                
                  <Quartos/>
                
              }
            />
    
              <Route
              path="/chamados"
              element={
                
                  <Chamados/>
                
              }
            />

            <Route
              path="/calendar"
              element={
                
                  <Calendar/>
                
              }
            />  
            
    
    
          </Routes>
    
        </Router>
      )
}

export default PrivateRoutes