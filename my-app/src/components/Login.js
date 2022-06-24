import React,{useState} from 'react'
import './App.css';
import axios from "axios"
import {useHistory} from "react-router-dom"

const Login=(setLoginUser) =>{
   
   const history = useHistory()

    const [user, setUser] = useState({
      email: "",
      password: "",
       
 });

   const handleChange = e => {
      const {name,value} = e.target
      console.log(name, value)
      setUser({...user,[name]: value})
   }        
    const Login =() =>{
       const {email,password}=user
       if(email && password)
       {
       axios.post("http://localhost:9002/Login",user)
       .then(res => {
          alert(res.data.message)
         //  history.push("/Appointment")
         // setLoginUser(res.data.user)
            // history.push("/Appointment")
      })
      history.push("/Appointment")
    }
    else {
      alert("invalid input")
    }
   }

  return (
      <>
      <div className="sidenav">
         <div className="login-main-text">
            <h2>Addministrator<br/> Login Page.</h2>
    
         </div>
      </div>
      <div className="main">

         <div className="col-md-6 col-sm-12">
             <h1> Hospital Management System.</h1>
            <div className="login-form">
            
               <form>
                  <div className="form-group">
                     {console.log("user", user)}
                     <label>Email</label>
                     <input type="text" name="email" className="form-control" placeholder="Enter your Mail" value={user.email}
                     onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="text" name = "password" className="form-control" placeholder="Password" value={user.password}
                     onChange={handleChange}/>
                  </div>
                  <button type="submit" className="btn btn-black" onClick={Login}>Login</button>&nbsp;&nbsp;&nbsp;
                  <button type="submit" className="btn btn-secondary" onClick={() =>{ return history.push("/Register")}}>Register</button>
               </form>
            </div>
         </div>
      </div>
      </>
  )
}
export default Login