import React from 'react'
import './feature.css'

function Features() {
  return (
    <div className='section1'>
        <div className='heading'>Features</div>
        <div className="row">
            <div className="col-4">
                <img src="slider6.jpg" width={200} alt="" />
            </div>
            <div className="col-4">
                <div className='cnt-box'>
                    <div>Instant health report over 16+ health parameters</div>
                    <div>QR Based Health Card</div>
                    <div>Advance Analytics dashboard for Impact Analysis</div>
                    <div>Instant Health Reports on WhatsApp, SMS & email along with printout</div>
                </div>
            </div>
            <div className="col-4">
            <div className='cnt-box'>
                    <div>Video call between doctor and patients with instant prescription</div>
                    <div>Instant ECG reporting</div>
                    <div>AI powered personalized Indian meal plan</div>
                    <div>Maintain Patient Medical Record with Complete data security</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features