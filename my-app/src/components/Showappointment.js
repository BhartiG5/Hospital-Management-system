import React from 'react'
import axios from 'axios'
import './Showappointment.css'
import { useHistory } from 'react-router-dom'

function Showappointment({Show,setShow})  {
  const history= useHistory()
    const deleteKeeper=(id) => {
      axios.post("http://localhost:9002/api/delete", {id})
      .then(res => setShow(res.data))
    }  
  return (
      <div>
        {
          Show.map( keeper => (
        <div className='keepercard ' key={keeper._id}>
          <h3> 
          <button type="button" className='button' onClick={() => deleteKeeper(keeper._id)} ><i class="fa fa-trash" ></i> Delete</button>&nbsp;
          <button type="submit" className="button" onClick={() => {return history.push("/Home")}}><i class="fa fa-fw fa-home"></i>Home</button></h3>
          <div className="show">
        <label><b>Patient Name:</b></label>
        <input type="text" placeholder='Name'className='show1' name='name' value={keeper.name}   required/>
        </div>
        <div className='show'>       
         <label><b>Phone :</b></label>
        <input type="number" className='show1' placeholder='Enter your number' name='phone' value={keeper.phone}   required/>
        </div>
        <div className='show'>
        <label><b>Date :</b></label>
        <input type="date" placeholder='dd/mm/yy'className='show1' name='date' value={keeper.date}   required/>
        </div>
        <div className='show'> 
        <label><b>Time :</b></label>
        <input type="time" placeholder='Name'className='show1' name='time' value={keeper.time}   required/>
        </div>
        </div>
        ))
         }
     </div>
  )}
export default Showappointment
