import express from 'express';
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/userController.js'
import {verifyToken, verifyUser} from '../middleware/authMiddleware.js'
const router = express.Router()

router.get('/checkauthentication', verifyToken, (req, res, next) => {
   // res.send("Hello user, you are authenticated")
   res.send(req.user)
})

router.get("/checkauser/:id", verifyUser, (req, res, next) => {
   res.send("Hello user, you are authenticated")
   // res.send(req.user)
})


//update user
router.put('/:userId', updateUser)

//delete user
router.delete('/:userId', deleteUser)

//get user
router.get('/:userId', verifyToken, getUser)

//get all users
router.get('/', getUsers)



export default router;