import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { userContext } from './context/UserContext'
import getBrowserData from './context/UserData'

const Root = () => {
  
  const userBrowserData = getBrowserData()

  const [auth, setAuth] = useState(userBrowserData.auth);
  return (
    <StrictMode>
      <userContext.Provider value={{ auth, setAuth }}>
        <App />
      </userContext.Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Root />);
