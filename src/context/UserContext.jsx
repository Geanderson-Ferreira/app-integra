import { use } from "react";
import { createContext, useState } from "react";

function checkTokenVality(userData){
  if (userData == undefined){
    return false

  }

  return true
}

function fetchDataFromlocalStorage(){
  const data = localStorage.getItem('_dataIntegra') || false
  return !data? false : JSON.parse(data)
}

const userContext = createContext();


const UserProvider = ({ children }) => {

  const userLocalData = fetchDataFromlocalStorage()

  const [userState, setUserState] = useState({
    hoteis: [],
    access_token: userLocalData?.access_token,
    auth: checkTokenVality(userLocalData.access_token),
    expire: userLocalData?.expire,
    loggedUser: userLocalData?.logged_user,
    userName: userLocalData?.user_name,
  });

  const updateUserContext = (updatedValues) => {
    setUserState((prev) => ({ ...prev, ...updatedValues }));
  };

  return (
    <userContext.Provider value={{ ...userState, updateUserContext }}>
      {children}
    </userContext.Provider>
  );
};

export { userContext, UserProvider };
