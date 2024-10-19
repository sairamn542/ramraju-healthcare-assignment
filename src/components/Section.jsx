import React from 'react';

function Section() {
  return (
    <div style={{ marginTop: "30px" }}>
      <div 
        id="carouselExampleControls" 
        className="carousel slide" 
        data-bs-ride="carousel" 
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="ramraju.png" alt="First slide" height={500} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="dt.jpg" alt="Second slide" height={500} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Giz_K1OZXzx7TWfa5YnsiY87RC6dwiPddA&s" alt="Third slide" height={500} />
          </div>
        </div>
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#carouselExampleControls" 
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#carouselExampleControls" 
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Section;