import { useState } from 'react'
import './register.css'
import axios from 'axios';

export default function Register() {
  const [username,setusername] = useState("");
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [error,seterror] = useState(false)
  
  const handlesubmit = async(e) =>{
    e.preventDefault();
    try{
      const resp = await axios.post("auth/register", {
      username,
      email,
      password});
      resp.data && window.location.replace("/login");
      console.log(resp);
    }
    catch(err){
      seterror(true)
      
    }
    if(error){
      alert("Something Went Wrong, Try Again" );
      window.location.replace("/register")

    }

  }
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handlesubmit}>
        <label>Username</label>
        <input
         className="registerInput" type="text" placeholder="Enter your username..."  required
         onChange={e => setusername(e.target.value)} 
        />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." 
        onChange={e => setemail(e.target.value)} />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." required
          onChange={e => setpassword(e.target.value)} />
        <button className="registerButton">Register</button>
        <button className="registerLoginButton">Login</button>
        
      </form>
      
      
      
    </div>
  )
}
