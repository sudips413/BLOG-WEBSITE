import { useRef } from 'react';
import { Link } from 'react-router-dom'
import './login.css'
const userRef = useRef();
const passwordRef = useRef();
const {dispatch, isFetching} = useContext(Context)
const handlesubmit = async (e) => {
  e.preventDefault();
  dispatch({tyoe:"LOGIN_START"});
  try{
    const res = axios.post("auth/login",{
    username:userRef.current.value,
    password : passwordRef.current.value,
    }  
    
    )
    dispatch({tyoe:"LOGIN_SUCCESS",payload : res.data});

  }catch(err){
    dispatch({tyoe:"LOGIN_FAILURE"});

  }
};
console.log(user);

export default function Login() {
  return (
    <div className='login' >
    <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter Username"
        ref ={userRef} />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..."
        red ={passwordRef} />
        <button className="loginButton" type='submit '>Login</button>
      </form>
        <button className="loginRegisterButton">
          <Link classname="link" to ="/Register">Register</Link>
        </button>
      
    </div>
  )
}
