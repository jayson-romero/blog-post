
import Post from "./Post"
import {posts} from '../utils/Posts'


const PostList = () => {
  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          title={post.title}
          content={post.content}
          author={post.author}
          date={post.date}
        />
      ))}
    </>
  )
}
export default PostList