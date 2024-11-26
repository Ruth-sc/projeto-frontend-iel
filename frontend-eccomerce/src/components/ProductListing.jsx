import React from 'react';
import ProductCard from './ProductCard';
import '../css/ProductListing.css';

const ProductListing = ({ 
  products, 
  columns = 4 // Padrão de 4 colunas
}) => {
  return (
    <div 
      className="product-listing" 
      style={{ 
        gridTemplateColumns: `repeat(${columns}, 1fr)` 
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          typeProduct={product.typeProduct}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
);
};

export default ProductListing;
