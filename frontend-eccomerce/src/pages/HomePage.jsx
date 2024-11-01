import React from "react";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import "../css/HomePage.css";

const HomePage = () => {
  const products = [
    {
      image: "/images/produc-image-5.jpeg",
      name: 'K-Swiss V8 - Masculino',
      typeProduct: 'Tênis',
      price: 100.00,
      priceDiscount: 30, // Representa 30% OFF
    },
    {
      image: "/images/produc-image-5.jpeg",
      name: 'K-Swiss V8 - Masculino',
      typeProduct: 'Tênis',
      price: 100.00,
      priceDiscount: 30, // Representa 30% OFF
    },
    {
      image: "/images/produc-image-5.jpeg",
      name: 'K-Swiss V8 - Masculino',
      typeProduct: 'Tênis',
      price: 100.00,
      priceDiscount: 30, // Representa 30% OFF
    },
    {
      image: "/images/produc-image-5.jpeg",
      name: 'K-Swiss V8 - Masculino',
      typeProduct: 'Tênis',
      price: 100.00,
      priceDiscount: 30, // Representa 30% OFF
    },
    {
      image: "/images/produc-image-5.jpeg",
      name: 'K-Swiss V8 - Masculino',
      typeProduct: 'Tênis',
      price: 100.00,
      priceDiscount: 30, // Representa 30% OFF
    },
    {
      image: "/images/produc-image-5.jpeg",
      name: 'K-Swiss V8 - Masculino',
      typeProduct: 'Tênis',
      price: 100.00,
      priceDiscount: 30, // Representa 30% OFF
    },
    {
      image: "/images/produc-image-5.jpeg",
      name: 'K-Swiss V8 - Masculino',
      typeProduct: 'Tênis',
      price: 100.00,
      priceDiscount: 30, // Representa 30% OFF
    },
    {
      image: "/images/produc-image-5.jpeg",
      name: 'K-Swiss V8 - Masculino',
      typeProduct: 'Tênis',
      price: 100.00,
      priceDiscount: 30, // Representa 30% OFF
    }
  ];

  const collections = [
    {
      image: "/images/collection-1.png",
      discount: '30% OFF',
    },
    {
      image: "/images/collection-2.png",
      discount: '30% OFF',
    },
    {
      image: "/images/collection-3.png",
      discount: '30% OFF',
    },
  ];

  const imageList = [
    { src: "/images/home-slide-1.jpeg" },
    { src: "/images/home-slide-2.jpeg" },
    { src: "/images/home-slide-3.jpeg" },
    { src: "/images/home-slide-4.jpeg" },
    { src: "/images/home-slide-5.jpeg" },
    { src: "/images/home-slide-6.jpeg" },
    { src: "/images/home-slide-7.jpeg" },
    { src: "/images/home-slide-8.jpeg" }
  ];

  const featuredCollections = [
    { icon: "/images/icone-camisa.png", label: "Camisetas" },
    { icon: "/images/icone-calca.png", label: "Calças" },
    { icon: "/images/icone-calca.png", label: "Bonés" },
    { icon: "/images/icone-headphone.png", label: "Headphones" },
    { icon: "/images/icone-tenis.png", label: "Tênis" },
  ];

  return (
    <div className="homepage-container">
      <section className="hero-section">
        <div className="hero-text">
          <p className="hero-subtitle">Melhores ofertas personalizadas</p>
          <h1 className="hero-title">Queima de estoque Nike <span role="img" aria-label="fire">🔥</span></h1>
          <p className="hero-description">
            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
          </p>
          <a href="#" className="hero-button">Ver Ofertas</a>
        </div>
        <div className="hero-gallery">
        <Gallery 
          className="gallery-image" 
          width="100%" 
          height="100%" 
          radius="8px" 
          images={imageList} 
          showThumbs
          />
        </div>
      </section>

      <Section title="Coleções em destaque">
        <div className="collections-container">
          {collections.map((collection, index) => (
            <div key={index} className="collection-card">
              <div className="collection-discount">{collection.discount}</div>
              <img src={collection.image} alt={`Coleção ${index + 1}`} className="collection-image" />
              <div className="collection-info">
                <a href="#" className="collection-button">Comprar</a>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <section className="featured-collections">
        <h2 className="featured-title">Coleções em destaque</h2>
        <div className="featured-collections-container">
          {featuredCollections.map((item, index) => (
            <div key={index} className="featured-collection-item">
              <div className="featured-icon-container">
                <img src={item.icon} alt={item.label} className="featured-icon" />
              </div>
              <p className="featured-label">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
      <Section title="Produtos em alta">
        <ProductListing products={products} />
      </Section>
      <section className="special-offer-section">
        <div className="offer-image-container">
          <img 
            src="/images/air-jordan-special.png" 
            alt="Air Jordan edição de colecionador" 
            className="offer-image"
          />
        </div>
        <div className="offer-text">
          <p className="offer-subtitle">Oferta especial</p>
          <h2 className="offer-title">Air Jordan edição de colecionador</h2>
          <p className="offer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <a href="#" className="offer-button">Ver Oferta</a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
