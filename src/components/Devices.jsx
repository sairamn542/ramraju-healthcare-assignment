import React from 'react'
import './devices.css'

function Devices() {
  return (
    <div>
        <div className='heading'>Medical Devices</div>
        <div className='box-container'>
            <div className='box'>
                <img src="https://img.freepik.com/premium-photo/photo-medical-equipment_951220-45123.jpg" alt="" />
                <p>Medical Machine</p>
            </div>
            <div className='box'>
                <img src="https://5.imimg.com/data5/SELLER/Default/2024/9/451177814/YW/US/SU/187041703/health-atm.png" alt="" />
                <p>Medical Machine</p>
            </div>
            <div className='box'>
                <img src="https://5.imimg.com/data5/XX/RM/XR/SELLER-62836945/suction-apparatus.jpg" alt="" />
                <p>Medical Machine</p>
            </div>
        </div>
    </div>
  )
}

export default Devices