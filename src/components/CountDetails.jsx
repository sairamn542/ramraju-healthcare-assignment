import React, { useEffect, useState } from 'react';
import './countdetails.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CountDetails() {
  const [counts, setCounts] = useState({
    doctors: 0,
    labs: 0,
    hospitals: 0,
    medicalStores: 0,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    const targetCounts = {
      doctors: 12000,
      labs: 1700,
      hospitals: 2000,
      medicalStores: 300,
    };

    const incrementCounts = () => {
      setCounts((prev) => ({
        doctors: Math.floor(prev.doctors + 100, targetCounts.doctors),
        labs: Math.floor(prev.labs + 10, targetCounts.labs),
        hospitals: Math.floor(prev.hospitals + 10, targetCounts.hospitals),
        medicalStores: Math.floor(prev.medicalStores + 5, targetCounts.medicalStores),
      }));
    };

    const interval = setInterval(incrementCounts, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="count-details section2" data-aos="fade-up">
      <h2 className="text-center mb-4">Healthcare Counts</h2>
      <div className="cards-container">
        <div className="card" data-aos="zoom-in">
          <div className="card-header">
            <span className="fas fa-user-md"></span>
          </div>
          <div className="card-body">
            {counts.doctors} Doctors
          </div>
        </div>
        <div className="card" data-aos="zoom-in">
          <div className="card-header">
            <span className="fa-solid fa-flask"></span>
          </div>
          <div className="card-body">
            {counts.labs} Labs
          </div>
        </div>
        <div className="card" data-aos="zoom-in">
          <div className="card-header">
            <span className="bi bi-hospital"></span>
          </div>
          <div className="card-body">
            {counts.hospitals} Hospitals
          </div>
        </div>
        <div className="card" data-aos="zoom-in">
          <div className="card-header">
            <span className="bi bi-capsule"></span>
          </div>
          <div className="card-body">
            {counts.medicalStores} Medical Stores
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountDetails;
