import React, { useEffect } from 'react';
import './MedicalSpecialities.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MedicalSpeciallities() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const specialties = [
    { name: "HbA1-c", img: "hg.jpeg" },
    { name: "Lipid TEST", img: "lipid.jpeg" },
    { name: "DIABETES", img: "Sugar.jpeg" },
    { name: "URINE", img: "ut.jpeg" },
    { name: "ECG Test", img: "ECG!.jpeg" },
  ];

  return (
    <div className='section2'>
      <div data-aos="fade-up">
        <h2 className='text-center mb-4'>More Specialities</h2>
        <div className='cards-container'>
          {specialties.map((speciality, index) => (
            <div className="crd" data-aos="zoom-in" key={index}>
              <div className="crd-header">
                <img src={speciality.img} alt={speciality.name} />
              </div>
              <div className="crd-body">
                {speciality.name}
              </div>
              <div className="crd-footer">
                <button className='crd-button'>View details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MedicalSpeciallities;
