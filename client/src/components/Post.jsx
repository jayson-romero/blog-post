import { Link} from 'react-router-dom'

const Post = ({postId, title, content, author, date }) => {
  return (
     <>
   <Link to={`/post/${postId}`}>
   <article className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md my-[50px]">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-800 mb-4">{content}</p>
      <div className="flex justify-between text-gray-600">
        <span>Author: {author}</span>
        <span>Date: {date}</span>
      </div>
     
    </article>
    </Link>
    </>
  )
}
export default Post