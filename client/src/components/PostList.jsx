import { useContext } from "react"
import Post from "./Post"
import {posts} from '../utils/Posts'
import { BlogContext } from "../context/BlogContext"

import useFecth from "../hooks/useFetch"





const PostList = () => {

  // console.log(props)
  // const {getAllPost} = useContext(BlogContext)

  const { data, loading, error} = useFecth('http://localhost:5000/api/blog')

 
  // const click = () => {
  //   console.log(data)
  // }

  return (
    <>
      {data.map((post) => (
        <Post
          key={post._id}
          postId={post._id}
          title={post.title}
          content={post.content}
          author={post.author}
          date={post.createdAt}
        />
      ))}
      <button >
        click me
      </button>
    </>
  )
}
export default PostList