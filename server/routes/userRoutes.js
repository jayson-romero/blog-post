import express from 'express';
import { viewUser, viewUsers, updateUser, deleteUser } from '../controllers/userController.js'
const router = express.Router()

router.get('/viewUser/:userId', viewUser)
router.post('/viewUsers', viewUsers)
router.put('/update/:userId', updateUser)
router.delete('/delete/:userId', deleteUser)


export default router;