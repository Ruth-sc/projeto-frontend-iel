import React from 'react';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';
import '../css/ProductListingPage.css';

const ProductListingPage = () => {
  const filters = [
    {
      title: 'Marca',
      inputType: 'checkbox',
      options: [
        { text: 'Adidas' },
        { text: 'Calvin Klein' },
        { text: 'K-Swiss' },
        { text: 'Nike' },
        { text: 'Puma' },
      ],
    },
    {
      title: 'Categoria',
      inputType: 'checkbox',
      options: [
        { text: 'Esporte e lazer' },
        { text: 'Casual' },
        { text: 'Utilitário' },
        { text: 'Corrida' },
      ],
    },
    {
      title: 'Gênero',
      inputType: 'checkbox',
      options: [
        { text: 'Masculino' },
        { text: 'Feminino' },
        { text: 'Unisex' },
      ],
    },
    {
      title: 'Estado',
      inputType: 'radio',
      options: [
        { text: 'Novo' },
        { text: 'Usado' },
      ],
    },
  ];

  const products = [
    {
      name: "K-Swiss V8 - Masculino",
      image: "/images/produc-image-1.jpeg",
      price: 100.00,
      priceDiscount: 70.00,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "/images/produc-image-1.jpeg",
      price: 200.00,
      priceDiscount: 150.00,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "/images/produc-image-1.jpeg",
      price: 300.00,
      priceDiscount: 250.00,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "/images/produc-image-1.jpeg",
      price: 400.00,
      priceDiscount: 350.00,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "/images/produc-image-1.jpeg",
      price: 500.00,
      priceDiscount: 450.00,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "/images/produc-image-1.jpeg",
      price: 600.00,
      priceDiscount: 550.00,
    },
  ];

  return (
    <div className="product-listing-container">
      <aside className="filters-sidebar">
        <h3 className="filters-title">Filtrar por</h3>
        <div className="filters">
          {filters.map((filter, index) => (
            <FilterGroup
              key={index}
              title={filter.title}
              inputType={filter.inputType}
              options={filter.options}
            />
          ))}
        </div>
      </aside>
      <div className="section-wrapper">
        <div className="order-by">
          <label htmlFor="order-select" className="order-label">Ordenar por:</label>
          <select id="order-select" className="order-select">
            <option value="relevant">Mais relevantes</option>
            <option value="lower-price">Menor preço</option>
            <option value="higher-price">Maior preço</option>
          </select>
        </div>
        <Section title={`${products.length} produtos encontrados`} titleAlign="left">
          <ProductListing products={products} />
        </Section>
      </div>
    </div>
  );
};

export default ProductListingPage;
