import React, { useEffect, useState, useRef } from 'react';
import './MedicalSpecialities.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MedicalSpecialities() {
  const [selectedCard, setSelectedCard] = useState(null);
  const cardsContainerRef = useRef(null); // Reference to the container holding cards

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    const handleClickOutside = (event) => {
      if (cardsContainerRef.current && !cardsContainerRef.current.contains(event.target)) {
        setSelectedCard(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const specialties = [
    { name: "HbA1-c", img: "hg.jpeg" },
    { name: "URINE", img: "ut.jpeg" },
    { name: "HEMOGLOBIN", img: "hemoglobin.jpeg" },
    { name: "COVID ANTIGEN", img: "covid.jpeg" },
    { name: "PULMONARY Function Test", img: "pulmonary.jpeg" },
    { name: "BODY FAT", img: "bodyfat.jpeg" },
    { name: "EYE TEST", img: "eyeTest.jpeg" },
    { name: "DIABETES", img: "diabetic.jpeg" },
    { name: "ECG Test", img: "ECG!.jpeg" },
    { name: "Lipid TEST", img: "lipid.jpeg" }
  ];

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div>
      <h2 className='text-center mt-4' style={{ color: '#4d5685' }}>More Specialities</h2>
      <div className='section2'>
        <div data-aos="fade-up">
          <div className='cards-container mt-2' ref={cardsContainerRef}>
            {specialties.map((speciality, index) => (
              <div 
                className={`crd ${selectedCard === index ? 'active' : ''}`}
                key={index}
                onClick={() => handleCardClick(index)}
              >
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
    </div>
  );
}

export default MedicalSpecialities;
