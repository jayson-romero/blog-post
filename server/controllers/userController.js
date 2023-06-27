import User from '../models/userModels.js';
import bcrypt from 'bcrypt';

const register = async (req, res, next) => {
   try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.passwod, salt);
      const newUser = new User({...req.body, password: hash});

      await newUser.save();
      res.status(200).send("User has been created")
   } catch (err) {
      next(err)
   }
}

const login = (req, res) => {
   res.json("success")
}



const logout = (req, res) => {
   res.send("logout")
}

export {login, register, logout}