import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/Gallery.css'; 

const Gallery = ({ className, width, height, radius, images, showThumbs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={`gallery ${className}`} style={{ width, height }}>
      <div className="gallery-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="gallery-slide">
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="gallery-image"
              style={{ width, height, borderRadius: radius }}
            />
          </div>
        ))}
      </div>
      <button className="gallery-arrow gallery-arrow-left" onClick={handlePrev} disabled={currentIndex === 0}>
        <img src="assets/arrow-left.svg" alt="Anterior" />
      </button>
      <button className="gallery-arrow gallery-arrow-right" onClick={handleNext} disabled={currentIndex === images.length - 1}>
        <img src="assets/arrow-right.svg" alt="Próximo" />
      </button>
      <div className="gallery-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
      {showThumbs && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className={`gallery-thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              style={{ borderRadius: radius }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  radius: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
  showThumbs: PropTypes.bool,
};

export default Gallery;
