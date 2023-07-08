import User from '../models/userModels.js';
import bcrypt from 'bcrypt';
import { createError } from '../middleware/errorMiddleware.js';
import generateToken from '../utils/generateToken.js';
import jwt from 'jsonwebtoken'

const register = async (req, res, next) => {
   try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({...req.body, password: hash});

      const response = await newUser.save();
      const { password,  ...others} = newUser._doc
      if(response) {
         // generateToken(res, newUser._id)
         return res.status(200).json(others)
      } else {
         next(createError(400, 'Invalid user data'))
      }
    
   } catch (err) {
      next(err)

   }
}

const login = async (req, res, next) => {

   try {
      const { email, password } = req.body;
      
    
      const user = await User.findOne({email})
     
      if (user && await bcrypt.compare(password, user.password))  {
         const { password, _id, ...others} = user._doc;
         generateToken( res, _id)
         res.status(200).json(others)
      }  else {
         next(createError(401, 'Invalid email or password'))
      }

 
   } catch (err) {
      next(err)
      // throw new Error(err)
      // res.status(401);

      // throw new Error('Invalid email or password');
   }
}
 


const logout = (req, res) => {
   res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
}

export {login, register, logout}