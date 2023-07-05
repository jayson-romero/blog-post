import { createContext, useContext } from "react";
import {TokenContext} from './TokenContext'
import axios from 'axios';
import useFecth from "../hooks/useFetch";


const BASE_URL = 'http://localhost:5000/api/user';

const UserContext = createContext();

const UserContextProvider = ({children}) => {
   
   const {token} = useContext(TokenContext)
   
   //HANLDE view user

      const viewUser = useFecth(`http://localhost:5000/api/user/viewUser/64a2a8051462a8c09f64cea2`)
  
   
   
   // const viewUser = async() => {
   //    try {
   //       const response = await useFecth(`${BASE_URL}/viewUser/${token._id}`);
   //       return response
   //    } catch (error) {
   //       return error
   //    }
   // }


 

   return (
      <UserContext.Provider value={{viewUser}}>
         {children}
      </UserContext.Provider>
   )
}

export { UserContextProvider, UserContext };