import { createContext } from 'react';


const userContext = createContext({
  auth: false, 
});

export { userContext };
