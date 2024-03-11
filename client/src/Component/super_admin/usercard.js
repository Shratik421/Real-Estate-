import React from 'react'
import './superadmin.css'

function usercard() {

  return (
    <div className="main-container">
        <div className="user-data">
            <div className="user-img-container">
                <img src="userimg.jpg" alt="User Image" className="user-img" />
            </div>
            <div className='user-name'>
                Tabish Khan
            </div>
            <div className="user-num">
                <p>+91 8520963741</p>
            </div>
            <div className="user-email" >
                <p>tabish@gmail.com</p>
            </div>
            <div className="button-container">
                <button className="send-mail-button" >Email</button>
                <button className="make-call-button" >Make a Call</button>
            </div>
        </div>
    </div>
  )
}

export default usercard