import User from '../models/userModels.js';
import bcrypt from 'bcrypt';
import { createError } from '../middleware/errorMiddleware.js';
import jwt from 'jsonwebtoken';

const register = async (req, res, next) => {
   try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({...req.body, password: hash});

      await newUser.save();
      res.status(200).send("User has been created")
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

      const { password, ...others} = user._doc;

      const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
      res.cookie('jwt', token, {
         httpOnly: true,
         secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
         sameSite: 'strict', // Prevent CSRF attacks
         maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
       }).status(200).json(others)
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