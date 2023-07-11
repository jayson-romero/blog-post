import { useParams } from "react-router-dom";
import {posts} from '../utils/Posts'
import useFecth from "../hooks/useFetch"

const PostDetail = () => {
   


   const params = useParams();
   const id = params.postId; 
   const { data, loading, error} = useFecth(`http://localhost:5000/api/blog/${id}`);
   // const filteredPosts = posts.filter((posts) => posts.id.toString() === id);

   console.log(data)
  return (
    <>
       {
         //  data.map((post) => (
         //    <div key={post._id} className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
         //       <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
         //       <p className="text-gray-800 mb-4">{post.content}</p>
         //       <div className="flex justify-between text-gray-600">
         //          <span>Author: {post.author}</span>
         //          <span>Date: {post.createdAt}</span>
         //       </div>
         //   </div>
         //  ))
       } 
    </>
  )
}
export default PostDetail