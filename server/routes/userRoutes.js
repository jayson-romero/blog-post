import express from 'express';
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/userController.js'
import { verifyUser} from '../middleware/authMiddleware.js'
const router = express.Router()

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
   // res.send("Hello user, you are authenticated")
//    res.send(req.user)
// })

// router.get("/checkauser/:id", verifyUser, (req, res, next) => {
  
//     res.send("Hello user, you are authenticated")
// })


//update user
router.put('/:userId',verifyUser, updateUser)

//delete user
router.delete('/:userId', verifyUser,  deleteUser)

//get user
router.get('/:userId', verifyUser,  getUser)

//get all users
router.get('/', getUsers)



export default router;