import { createContext } from "react";
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/auth';

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

   //HANLDE REGISTRATION
   const register = async(userData) => {
      try {
         const response = await axios.post(`${BASE_URL}/register`, userData);
         return response;
      } catch (error) {
         console.log(error.response.data)
      }
   }
   //HANDLE LOGIN
   //HANDLE LOGOUT



   return (
      <AuthContext.Provider value={{register}}>
         {children}
      </AuthContext.Provider>
   )
}

export { AuthContextProvider, AuthContext };