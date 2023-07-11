import express from 'express';
import { addblog, updateblog, deleteblog, getblog, getblogs } from '../controllers/blogController.js'
import { verifyUser} from '../middleware/authMiddleware.js'
const router = express.Router()


//add  blog
router.post('/', addblog)

//update blog
router.put('/:blogId',verifyUser, updateblog)

//delete blog
router.delete('/:blogId', verifyUser,  deleteblog)

//get blog
router.get('/:blogId', verifyUser,  getblog)

//get all blog
router.get('/', getblogs)



export default router;