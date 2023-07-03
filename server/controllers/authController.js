import User from '../models/userModels.js';
import bcrypt from 'bcrypt';
import { createError } from '../middleware/errorMiddleware.js';
import generateToken from '../utils/generateToken.js';

const register = async (req, res, next) => {
   try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({...req.body, password: hash});

      const response = await newUser.save();
      const { password, _id,  ...others} = newUser._doc
      if(response) {
         generateToken(res, newUser._id)
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
      // const { name, password } = req.body;
      const user = await User.findOne({name:req.body.name})
      if(!user) return next(createError(404, 'User not found'))

      const isCorrect = await bcrypt.compare(req.body.password, user.password)
      if(!isCorrect) return next(createError(400, 'Wrong password'))

      const { password, _id, ...others} = user._doc;

      generateToken(res, user._id)
      res.status(200).json(others)
    
       
   } catch (err) {
      next(err)
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