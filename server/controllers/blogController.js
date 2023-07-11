import Blog from '../models/blogPostModels.js'

const addblog = async (req, res, next) => {
   try {
      const {title, content, categories, author} = req.body
      const newBlog = new Blog({title, content, author, categories})

      const response = await newBlog.save()

      res.status(200).json(response)

   } catch (error) {
      next(error)
   }

}


const updateblog = async (req, res, next) => {
   try { 
         const updatePost = await Blog.findByIdAndUpdate(req.params.blogId, { $set: req.body }, {new: true})
         res.status(200).json(updatePost)
         
      } catch (error) {
         next(error)
      }
}

 const deleteblog = async (req, res, next) => {
   try { 
       await Blog.findByIdAndDelete(req.params.blogId)
      res.status(200).json("Post has been deleted")
   } catch (error) {
      next(error)
   }
}

 const getblog = async (req, res, next) => {
      try {
         const post = await Blog.findById(req.params.blogId);
         res.status(200).json(post)
      } catch (error) {
         next(error)
      }
}

//get All blogs
 const getblogs = async (req, res, next) => {
      const author = req.query.user
      const catName = req.query.cat

   try {
      let posts;
      if(author) {
         posts = await Blog.find({author})
      } else if (catName) {
         posts = await Blog.find({categories:{$in: [catName]}})
      } else {
         posts = await Blog.find()
      }
      res.status(200).json(posts)
   } catch (error) {
      next(error)
   }
}

export {addblog, updateblog, deleteblog, getblog, getblogs}