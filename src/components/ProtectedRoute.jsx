import React, {useContext, createContext} from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("INTEGRATOKEN");

  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
