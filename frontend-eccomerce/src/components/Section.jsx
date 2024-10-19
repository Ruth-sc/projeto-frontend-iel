import React from 'react';
import PropTypes from 'prop-types';
import '../css/Section.css'; 

const Section = ({ title, titleAlign = 'left', children }) => {
  return (
    <div className="section-wrapper">
      <h1 className="main-title" style={{ textAlign: titleAlign }}>{title}</h1>
      <div className="section-container">
        {children}
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.oneOf(['left', 'center']),
  children: PropTypes.node.isRequired,
};

export default Section;
