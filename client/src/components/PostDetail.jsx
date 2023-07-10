import { useParams } from "react-router-dom";
import {posts} from '../utils/Posts'

const PostDetail = () => {

   const params = useParams();
   const id = params.postId; 

   const filteredPosts = posts.filter((post) => post.id.toString() === id);


  return (
    <>
       {
          filteredPosts.map((post) => (
            <div key={post.id} className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
               <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
               <p className="text-gray-800 mb-4">{post.content}</p>
               <div className="flex justify-between text-gray-600">
                  <span>Author: {post.author}</span>
                  <span>Date: {post.date}</span>
               </div>
           </div>
          ))
       } 
    </>
  )
}
export default PostDetail