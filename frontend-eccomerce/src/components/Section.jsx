// Section.jsx

import React from 'react';
import PropTypes from 'prop-types';
import '../css/Section.css';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <div className="section-wrapper">
      <div className="section-header" style={{ textAlign: titleAlign }}>
        <h1 className="main-title">{title}</h1>
        {link && (
          <a href={link.url} className="section-link">
            {link.text}
          </a>
        )}
      </div>
      <div className="section-container">
        {children}
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.oneOf(['left', 'center']),
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
};

export default Section;
