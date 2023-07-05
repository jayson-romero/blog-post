import User from '../models/userModels.js'


const viewUser = async (req, res, next) => {   
  try {
   
     const {userId} = req.params
      const user = await User.findById(userId)   
      res.status(200).send(user)

  } catch (error) {
    next(error)
  }
   
}

const viewUsers = async (req, res, next) => {
   


}


const updateUser = async (req, res, next) => {


}

const deleteUser = async (req, res, next) => {

}


export {viewUser, viewUsers, updateUser, deleteUser}