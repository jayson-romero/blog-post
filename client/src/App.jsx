
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
// import Profile from './components/Profile';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Home/>}>
        <Route path='/' element={<PostList />}/>
        <Route path='/post/:postId' 
        action={({ params }) => {
          params.postId;
        }}
        element={<PostDetail/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route path='*' element={<NotFound/>}/>
      </>
    )
  )

  return (
    <>
       <ToastContainer/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
