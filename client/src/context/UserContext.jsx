import { createContext, useContext } from "react";
import {TokenContext} from './TokenContext'
import axios from 'axios';



const BASE_URL = 'http://localhost:5000/api/user';

const UserContext = createContext();

const UserContextProvider = ({children}) => {
 
   //get user
   const getUser = async (userID) => {
      try {
         const user = await axios.get(`${BASE_URL}/${userID}`)
         return user.data
      } catch (error) {
         return error
      }
   }
   


 

   return (
      <UserContext.Provider value={{getUser}}>
         {children}
      </UserContext.Provider>
   )
}

export { UserContextProvider, UserContext };