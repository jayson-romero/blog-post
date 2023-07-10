import express from 'express';
import { addblog, updateblog, deleteblog, getblog, getblogs } from '../controllers/blogController.js'
import { verifyUser} from '../middleware/authMiddleware.js'
const router = express.Router()


//add  blog
router.post('/:userId', addblog)

//update blog
router.put('/:userId',verifyUser, updateblog)

//delete blog
router.delete('/:userId', verifyUser,  deleteblog)

//get blog
router.get('/:userId', verifyUser,  getblog)

//get all blog
router.get('/', getblogs)



export default router;