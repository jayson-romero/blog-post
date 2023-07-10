import User from '../models/userModels.js'
import bcrypt from 'bcrypt'


const updateUser = async (req, res, next) => {   
  try {
    const {userId} = req.params
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const UpdateUser = await User.findByIdAndUpdate(userId,
      { password: hash, 
        name: req.body.name,
        email: req.body.email }, 
      { new: true }
      )


    res.status(200).json("user has been updated")  
  } catch (err) {
    next(err)
  }
   
}

const deleteUser = async (req, res, next) => {
   try {
      const {userId} = req.params
      await User.findByIdAndDelete(userId)
      res.status(200).json("user has been deleted")
   } catch(err){
     next(err)
   }


}


const getUser = async (req, res, next) => {
  try {
    const {userId} = req.params
     const user = await User.findById(userId)   
     res.status(200).send(user)

 } catch (err) {
   next(err)
 }

}

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}


export {getUser, getUsers, updateUser, deleteUser}