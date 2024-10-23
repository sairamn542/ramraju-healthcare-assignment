import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div>
        <div  className='img-list'>
            {/* <img src="ig.png" alt="" />
            <img src="fb.png" alt="" />
            <img src="lin.png" alt="" />
            <img src="x.png" alt="" /> */}
            <span className='bi bi-instagram'></span>
            <span className='bi bi-facebook'></span>
            <span className='bi bi-linkedin'></span>
            <span className='bi bi-twitter'></span>
            <h5>copyright &copy;2024 Maharaju Healthcare Technologies Pvt. Ltd. All rights reserved</h5>
        </div>
    </div>
  )
}

export default Footer