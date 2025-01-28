import React, { useState, useEffect } from 'react';

function Carousel() {
  const images = [
    '/pic/logo.jpg',
    '/pic/g2.jpg',
    '/pic/group.jpg',
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='absolute top-0 left-0 w-full   h-[60vh]  mt-[2vw] overflow-hidden'>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel ${index}`}
          className={`absolute w-full h-full object-cover  transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } ${index === 0 ? 'object-fill' : 'object-cover'}`}
          style={{ objectFit: index === 0 ? 'fill' : 'cover' }}
        />
      ))}
    </div>
  );
}

export default Carousel;
