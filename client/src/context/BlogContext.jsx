import { createContext } from "react";
import axios from "axios";
const BlogContext = createContext()
const BASE_URL = 'http://localhost:5000/api/blog';

const BlogContextProvider = ({children}) => {
   
   //handle get all post
      const getAllPost = async () => {
         try {
            const response = await axios.get(`${BASE_URL}`) 
            return response
         } catch (error) {
            return error
         }
      }   
   //handle add  post

   //handle update post

   //handle delete post

   //handle single post
 
   return (   
   <BlogContext.Provider value={{getAllPost}}>
      {children}
   </BlogContext.Provider>
   
  )
}

export {BlogContext, BlogContextProvider}
