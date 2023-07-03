import { createContext, useContext } from "react";
import { TokenContext } from "./TokenContext";
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/auth';

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
   
   const {saveToken, removeToken} = useContext(TokenContext)

   // console.log(token)
   //HANLDE REGISTRATION
   const register = async(userData) => {
      try {
         const response = await axios.post(`${BASE_URL}/register`, userData);
         saveToken(response.data)
         return response; 
      } catch (error) {
         return error
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