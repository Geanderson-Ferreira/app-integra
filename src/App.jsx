import React, { useContext } from "react";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import { userContext } from "./context/UserContext"; // Correção aqui

function App() {
  const { auth } = useContext(userContext); // Correção aqui

  //console.log(auth)
  return (
    <>
      <PrivateRoutes />
      {/* {auth ? <PrivateRoutes /> : <PublicRoutes />} */}
    </>
  );
}

export default App;
