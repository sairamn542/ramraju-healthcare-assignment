import React, { useState, useEffect } from 'react';
import './Carousel.css'; 

const images = [
    'ramraju.png',
    'slider13.webp',
    'slider8.jpg',
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const handleCircleClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel-container mt-3">
            <div className="carousel">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
            <div className="circle-container">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`circle ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => handleCircleClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
