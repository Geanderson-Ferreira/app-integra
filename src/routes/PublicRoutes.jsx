import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/Login";


function PublicRoutes(){

    return(

        <Router> 
          
          <Routes>

            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login/>} />
    
          </Routes>
    
        </Router>
      )
}

export default PublicRoutes