import React from 'react';
import './header.css'

const Header =() => {
  return (
    <div className='header'>
      <div className="headertiles">
      <span className='headertitle1'>Technology & Life</span>
      <span className='headertitle2'>Blog</span>          
      
      
      </div>
      <img
        className="headerimg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      ></img>
    
    </div>
  )
}

export default Header;
