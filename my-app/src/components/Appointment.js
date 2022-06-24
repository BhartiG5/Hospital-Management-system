import React, {useState} from 'react'
import axios from 'axios';
import './Appointment.css'
import { useHistory } from 'react-router-dom';

const Appointment= ()=> {
  const history = useHistory()
  
  const [me, setMe] =useState({
      name:"",
      phone:"",
      date:"",
      time:""
      
})
  const handleChange= e => {
      const {name,value} = e.target;
      console.log(name, value)
      setMe({...me,[name]: value})

  }
const Appointment =() => {
    const {name, phone, date, time} = me
    if(name && phone && date && time)
   {
  //  alert("posted")
   axios.post("http://localhost:9002/Appointment", me)
   
      .then((res) => {
          alert(res.data.message)
         })
         window.location.reload()
   }
    else {
      alert("invalid input")
    }
  }
return (
    
    <div className="homepage">
        <h2>Add user</h2>
        <div className="input">
        <label><b>Patient Name:</b></label>
        <input type="text" placeholder='Name'className='field' name='name' value={me.name} onChange={handleChange} required/>
        </div>

        <div className='input1'>       
         <label><b>Phone :</b></label>
        <input type="number" className='field1' placeholder='Enter your number' name='phone' value={me.phone} onChange={handleChange}  required/>
        </div>
        <div className='input2'>
        <label><b>Date :</b></label>
        <input type="date" placeholder='dd/mm/yy'className='field2' name='date' value={me.date} onChange={handleChange} required/>
        </div>
        <div className='input3'> 
        <label><b>Time :</b></label>
        <input type="time" placeholder='Name'className='field3' name='time' value={me.time} onChange={handleChange} required/>
        </div>
        <button type="Submit" className='button' onClick={Appointment}> Submit </button>&nbsp;
        <button type="Submit" className="button" onClick={() => {return history.replace("/Showappointment")}}>Show</button>
      
      
    </div>
  )
}
export default Appointment;
