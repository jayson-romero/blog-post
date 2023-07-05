import { createContext, useContext } from "react";
import { TokenContext } from "./TokenContext";
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/auth';

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
   
   const {saveToken, removeToken} = useContext(TokenContext)
   
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
   const login = async(userData) => {
      try {
           const response = await axios.post(`${BASE_URL}/login`, userData)
           return  response.data
      } catch (error) {
         return error
      }
   }


   //HANDLE LOGOUT
   const logout = async () => {
      try {
         await axios.post(`${BASE_URL}/logout`);
         removeToken()
      } catch (error) {
         return error
      }

   }


   return (
      <AuthContext.Provider value={{register, logout, login}}>
         {children}
      </AuthContext.Provider>
   )
}

export { AuthContextProvider, AuthContext };