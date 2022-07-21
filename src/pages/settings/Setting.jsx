import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import './setting.css'

export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>          
          <button className="settingsTitleDelete">Delete Account</button>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input className='inputbox' type="text" placeholder="Sudip Shrestha" name="name" />
          <label>Email</label>
          <input className='inputbox' type="email" placeholder="Sudips413@gmail.com" name="email" />
          <label>Password</label>
          <input className='inputbox' type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
