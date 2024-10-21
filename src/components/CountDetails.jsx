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
      doctors: 100,
      labs: 10,
      hospitals: 20,
      medicalStores: 30,
    };

    const incrementCounts = () => {
      setCounts((prev) => ({
        doctors: Math.min(prev.doctors + 1, targetCounts.doctors),
        labs: Math.min(prev.labs + 1, targetCounts.labs),
        hospitals: Math.min(prev.hospitals + 1, targetCounts.hospitals),
        medicalStores: Math.min(prev.medicalStores + 1, targetCounts.medicalStores),
      }));
    };

    const interval = setInterval(() => {
      incrementCounts();
    }, 50);

    if (
      counts.doctors === targetCounts.doctors &&
      counts.labs === targetCounts.labs &&
      counts.hospitals === targetCounts.hospitals &&
      counts.medicalStores === targetCounts.medicalStores
    ) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [counts]);

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
