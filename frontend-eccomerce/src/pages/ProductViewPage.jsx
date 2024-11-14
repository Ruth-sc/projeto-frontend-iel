import React from 'react';
import { useLocation } from 'react-router-dom';
import Gallery from '../components/Gallery';
import BuyBox from '../components/Buybox';
import ProductOptions from '../components/ProductOptions';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import '../css/ProductViewPage.css';

const ProductViewPage = () => {
  const { state } = useLocation();

  const { image, name, typeProduct, price, priceDiscount } = state || {};

  const product = {
    name: name || "Produto sem nome",
    reference: "REF:12345678",
    stars: 4.7,
    rating: 90,
    price: price,
    priceDiscount: priceDiscount,
    description: "Descrição padrão do produto.",
    images: [{ src: image }],
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["#3B82F6", "#10B981", "#C92071"],
  };

  const relatedProducts = [
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
    }
  ];

  return (
    <div className="product-view-page">
      <div className="product-details">
        <Gallery
          images={product.images}
          showThumbs
          width="700px"
          height="570px"
          radius="4px"
        />
        <BuyBox
          name={product.name}
          reference={product.reference}
          stars={product.stars}
          rating={product.rating}
          price={product.price}
          priceDiscount={product.priceDiscount}
          description={product.description}
        >
          <ProductOptions
            options={product.sizes}
            shape="square"
            type="text"
            radius="4px"
          />
          <ProductOptions
            options={product.colors}
            shape="circle"
            type="color"
          />
        </BuyBox>
      </div>
      <Section title="Produtos Relacionados" titleAlign="left">
        <ProductListing products={relatedProducts} />
      </Section>
    </div>
  );
};

export default ProductViewPage;
