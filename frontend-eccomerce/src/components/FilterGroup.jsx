import React from 'react';
import PropTypes from 'prop-types';
import '../css/FilterGroup.css';

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="filter-group">
      <h4 className="filter-title">{title}</h4>
      <ul className="filter-options">
        {options.map((option, index) => (
          <li key={index} className="filter-option">
            <label>
              <input type={inputType} value={option.value || option.text} />
              <span className="filter-text">{option.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

FilterGroup.propTypes = {
  title: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string,
    })
  ).isRequired,
};

export default FilterGroup;
