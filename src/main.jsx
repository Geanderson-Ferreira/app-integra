import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { userContext } from './context/UserContext'
import getBrowserData from './context/UserData'
import { UserProvider } from "./context/UserContext";


const Root = () => {
  
  const userBrowserData = getBrowserData()

  const [auth, setAuth] = useState(userBrowserData.auth);
  return (
    <StrictMode>
        <UserProvider>
        <App />
        </UserProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Root />);
