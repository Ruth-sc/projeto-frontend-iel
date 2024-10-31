import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/ProductOptions.css';

const ProductOptions = ({ options, shape, type, radius }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="product-options">
      {options.map((option, index) => (
        <div
          key={index}
          className={`option ${shape} ${type} ${selectedOption === option ? 'selected' : ''}`}
          onClick={() => handleOptionClick(option)}
          style={{
            borderRadius: shape === 'square' ? radius : '50%',
            backgroundColor: type === 'color' ? option : '',
          }}
        >
          {type === 'text' && <span className="option-text">{option}</span>}
          {type === 'color' && selectedOption === option && <div className="selected-circle"></div>}
        </div>
      ))}
    </div>
  );
};

ProductOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  shape: PropTypes.oneOf(['square', 'circle']).isRequired,
  type: PropTypes.oneOf(['text', 'color']).isRequired,
  radius: PropTypes.string,
};

export default ProductOptions;
