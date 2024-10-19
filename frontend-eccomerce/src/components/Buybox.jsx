// src/components/BuyBox.js
import React from 'react';
import PropTypes from 'prop-types';
import '../css/BuyBox.css';

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
  return (
    <div className="buy-box">
      <h1 className="product-name">{name}</h1>
      <p className="product-reference">Ref: {reference}</p>
      <div className="product-rating">
        <span className="stars">{stars}★</span>
        <span className="rating">({rating})</span>
      </div>
      <div className="product-prices">
        {priceDiscount && (
          <span className="price-discount">R$ {priceDiscount}</span>
        )}
        <span className="price-original">
          {priceDiscount ? <s>R$ {price}</s> : `R$ ${price}`}
        </span>
      </div>
      <p className="product-description">{description}</p>
      {children}
      <button className="buy-button">COMPRAR</button>
    </div>
  );
};

BuyBox.propTypes = {
  name: PropTypes.string.isRequired,
  reference: PropTypes.string,
  stars: PropTypes.number,
  rating: PropTypes.number,
  price: PropTypes.number.isRequired,
  priceDiscount: PropTypes.number,
  description: PropTypes.string,
  children: PropTypes.node
};

export default BuyBox;
