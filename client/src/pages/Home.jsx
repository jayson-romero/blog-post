import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <div className="flex flex-col justify-between h-screen">
      <Navbar/>
      <Outlet className=""/>
      <Footer/>
    </div>
    </>
  )
}

export default Home
