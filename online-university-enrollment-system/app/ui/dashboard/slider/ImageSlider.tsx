'use client'

import React, { useState } from 'react';

const images = [
    '/images/image1.jpg', // Ensure these images exist in your public/images directory
    '/images/image1.jpg',
    '/images/image1.jpg',
];

const ImageSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <img src={images[currentIndex]} alt="Slider Image" className="w-full h-auto rounded-lg shadow-md" />
            <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-blue-800 p-2 rounded-full shadow hover:bg-blue-100 transition">
                &#10094; {/* Left arrow */}
            </button>
            <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-blue-800 p-2 rounded-full shadow hover:bg-blue-100 transition">
                &#10095; {/* Right arrow */}
            </button>
        </div>
    );
};

export default ImageSlider;