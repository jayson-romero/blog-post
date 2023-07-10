import Blog from '../models/blogPostModels.js'

const addblog = async (req, res, next) => {
   try {
      const {title, content, author} = req.body
      const newBlog = new Blog({title, content, author})

      const response = await newBlog.save()

      res.send(response)

   } catch (error) {
      console.log(error)
   }


 

}


const updateblog = (req, res, next) => {

}

 const deleteblog = (req, res, next) => {

}
 const getblog = (req, res, next) => {

}

 const getblogs = (req, res, next) => {
   res.send("resr")
}

export {addblog, updateblog, deleteblog, getblog, getblogs}