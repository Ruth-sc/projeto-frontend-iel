import React from 'react';
import { Link } from 'react-router-dom';

const Information = ({ title, informations }) => {
  return (
    <div style={{ width: '270px' }}>
      <h3 style={{ marginBottom: '20px' }}>{title}</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {informations.map((info, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {info.link ? (
              <Link to={info.link} style={{ color: '#fff', textDecoration: 'none' }}>
                {info.text}
              </Link>
            ) : (
              <span>{info.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Information;
