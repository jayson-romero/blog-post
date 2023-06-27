import express from 'express';
import { login, register, logout } from '../controllers/userController.js'
const router = express.Router()

router.get('/login', login)
router.post('/register', register)
router.post('/logout', logout)

export default router;