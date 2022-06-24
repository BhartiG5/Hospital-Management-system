import React, { useState , useEffect } from 'react';
import './App.css';
import Register from './components/Register.js';
import {BrowserRouter as Router ,Switch, Route} from "react-router-dom";
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Appointment from './components/Appointment';
import Showappointment from './components/Showappointment';
import axios from 'axios';

function App() {
  
  const [user, setLoginUser] =useState({})
  const [Show,setShow] = useState({})
  useEffect(() =>{
    axios.get("http://localhost:9002/api/getAll")
    .then(res =>setShow(res.data))
  },[])

  return (
    <>
<Router>
    {console.log("Show :",Show)}
      <Navbar/>
  <Switch>
      <Route exact path ="/"><Home/></Route>
      <Route path ="/Login">
      {
        <Login setLoginUser={setLoginUser}/>
      }
      </Route>
        <Route path ="/Register"><Register/></Route>
        <Route path ="/Appointment"><Appointment/></Route>
        <Route path='/Showappointment'><Showappointment Show={Show} setShow={setShow}/></Route>
  </Switch>
</Router>
  </>
  );
}

export default App;
