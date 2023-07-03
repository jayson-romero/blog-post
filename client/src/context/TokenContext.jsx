import { createContext, useState, useEffect } from "react";

const TokenContext = createContext();

const TokenContextProvider = ({children}) => {

   const [token, setToken] = useState( JSON.parse(localStorage.getItem("auth_token")) || null);

 

        // Save the token to local storage
        const saveToken = (newToken) => {
         try {
           setToken(newToken);
         } catch (error) {
           console.log("problob with saving Token")
         }
      
       };
     
       // Remove the token from local storage
       const removeToken = () => {
         localStorage.removeItem('auth_token');
         setToken(null);
       };

       useEffect(() => {
         localStorage.setItem('auth_token', JSON.stringify(token));
       
       }, [token]) 
   


   return (
      <TokenContext.Provider value={{saveToken, removeToken}}>
         {children}
      </TokenContext.Provider>
   )
}

export { TokenContext, TokenContextProvider } 