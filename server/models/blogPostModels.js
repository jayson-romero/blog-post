import mongoose from 'mongoose';


const blogSchema = mongoose.Schema(
   {
      title: {
         type: String,
         required: true
      },
      categories: {
         type: String,
         required: true
      },
      content: {
         type: String,
         required: true
      },
      author: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         required: true
      }
   },
   {
      timestamps: true,
   }
)

export default mongoose.model('Blog', blogSchema)