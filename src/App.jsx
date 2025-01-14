import React, { useContext } from "react";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import { userContext } from "./context/UserContext";

function App() {

  const { auth } = useContext(userContext);

  return (
    <>
      {auth ? <PrivateRoutes /> : <PublicRoutes />}
    </>
  );
}

export default App;
