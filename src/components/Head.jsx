import React from 'react';
import './header.css';

function Head() {
  return (
    <div>
      <div className="header">
        <div>
          <div><img src="logo.jpeg" alt="" height={90} /></div>
        </div>
        <div className='content'>
          <div>Home</div>
          <div>Appointment</div>
          <div>Services</div>
          <div>Medical Tests</div>
          <div>Facilities</div>
          <div>About</div>
          <div>Contact Us</div>
          <div className="login">Login</div>
          <div>
            <button className='buttons'>
              <div className='circle'>
                <span className='bi bi-arrow-right'></span>
              </div>
              <span className="text">SignUp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;