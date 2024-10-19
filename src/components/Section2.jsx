import React from 'react'
import './section2.css'

function Section2() {
  return (
    <div>
      <div className="section2">
        <div className='inp-container'>
          <div><span className='bi bi-search'></span><input type="text" placeholder='EX. Doctor, Hospital' /></div>
          <div><span className='bi bi-search'></span><input type="text" placeholder='EX. Surgeon, Cardiology' /></div>
          <div className='big'><span className='bi bi-geo-alt'></span><input type="text" placeholder='Set your Location' /></div>
          <div className='button3' style={{padding : "0 20px"}}><span className='bi bi-search'></span><span className='spanbtn'>Search</span></div>
        </div>
        <div className="main">
          <h1>You Maybe Looking For</h1>
          <div>
            <div>
              <span className='fas fa-user-md'></span>
              <div>Doctor</div>
            </div>
            <div>
              <span className='fa-solid fa-flask'></span>
              <div>Lab</div>
            </div>
            <div>
              <span className='bi bi-hospital'></span>
              <div>Hospital</div>
            </div>
            <div>
              <span className='bi bi-capsule'></span>
              <div>Medical Store</div>
            </div>
            <div>
              <span className="fa-solid fa-truck-medical"></span>
              <div>Ambulance</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section2