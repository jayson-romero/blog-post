import { useContext, useEffect, useState } from "react"
import FormInput from "./FormInput"
import { TokenContext} from '../context/TokenContext'
import { UserContext } from "../context/UserContext"
import useFecth from "../hooks/useFetch.js"


const Profile = () => {
   const { token } = useContext(TokenContext);
   const { getUser } = useContext(UserContext);
    


  

   const [ values, setValues] = useState({
      name: token.name,
      email: token.email,
      password: "",
      confirmPassword:"",
    })
  

const inputs = [
   { 
     id: 1,
     type: "text",
     name: "name",
     label: "Name",
     pattern: "^[a-zA-Z ]*$",
     errorMessage: "Name shouldn't include any spcial characters.",
     required: true
   },
   { 
     id: 2,
     name: "email",
     label: "Email address",
     type: "email",
     errorMessage: "It should be a valid email address.",
     required: true

   },
   { 
     id: 3,
     name: "password",
     label: "New Password",
     type: "password",
     pattern: "(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8}).*$",
     errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character.",
     required: true

   },
   { 
     id: 4,
     name: "confirmPassword",
     label: "Confirm New Password",
     pattern: values.password,
     type: "password",
     errorMessage: "Password don't match.",
     required: true
   },
 ]

 
 const handleChange = (e) => {
   setValues({...values, [e.target.name]:e.target.value})
 }

 const handleClick = async (e) => {
    try {
      await getUser(token._id)
    } catch (error) {
      
    }
 }



  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-[500px] bg-white mx-auto p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">My Profile</h2>

      <form >
      {
        inputs.map((input)=> (
         <FormInput key={input.id}
         {...input}
         value={values[input.name]}
         handleChange={handleChange}
         errorMessage={input.errorMessage}
         />
        ))
      }
       


        <button
          onClick={handleClick}
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Update Profile
        </button>
      </form>
    </div>
    </>
  )
}
export default Profile