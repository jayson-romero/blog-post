import jwt from 'jsonwebtoken';
import { createError } from './errorMiddleware.js';
// import User from '../models/userModels.js';


// verify the jwt token 
export const verifyToken = (req, res, next) => {

   const token =  req.cookies.access_token; 
    
   if(!token) {
      return next(createError(401, "you are not authorized"))
   }

   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if(err) return next(createError(403, "Token is not valid!"))
      req.user = user;
      next()
   })
}

// verify to user 
export const verifyUser = ( req, res, next ) => {
   verifyToken(req, res, next, () => {
      if ( req.user.id === req.params.id) {
         next()
      } else {
         if(err) return next(createError(403, "You are not authorized"))
      }
   })
}


