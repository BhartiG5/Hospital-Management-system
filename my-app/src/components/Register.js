import React,{useState} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"

const Register= () => {

   const history = useHistory()

    const [user, setUser] =useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:"",
        
})
    const handleChange= e => {
        const {name,value} = e.target;
        console.log(name, value)
        setUser({...user,[name]: value})

    }

   const Register =() => {
       const {name, email, password, confirmpassword} = user
       if(name && email && password && (password === confirmpassword))
      {
      // alert("You Have Successfully Registerd")
      axios.post("http://localhost:9002/Register",user)
         .then(res =>
         {
         alert(res.data.message)
         // history.push('/Login')
         })
         history.push('/Login')
      }
       
      else {
         alert("invalid input")
       }
       
    }
   
  return (
    <>
      <div className="sidenav">
         <div className="login-main-text">
            <h2>Addministrator<br/>   Register Page.</h2>
    
         </div>
      </div>
      <div className="main">

          <div className="col-md-6 col-sm-12">
             <h1>Hospital Management System.</h1>
            <div className="register-form">
            
               <form>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" name="name" className="form-control" value={user.name} placeholder="User Name" onChange={handleChange}/>     
                    </div>

                  <div className="form-group">
                     <label>Email</label>
                     <input type="text" name="email" className="form-control" value={user.email} placeholder="email" onChange={handleChange} />
             </div>
                 
                    <div className="form-group">
                     <label>Password</label>
                     <input type="password" name="password" className="form-control" value={user.password} placeholder="Password" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                     <label>Confirm Password</label>
                     <input type="password" name="confirmpassword" className="form-control" value={user.confirmpassword}  placeholder="Confirm password" onChange={handleChange} />
                  </div>

                  
                  <button type="submit" className="btn btn-secondary" onClick={Register}>Register</button>&nbsp;&nbsp;&nbsp;
                  <button type="submit" className="btn btn-black" onClick={() => {return history.push("/Login")}}>Login</button>
               </form>
            </div>
         </div>
      </div>
      </>
  )
}
export default Register


