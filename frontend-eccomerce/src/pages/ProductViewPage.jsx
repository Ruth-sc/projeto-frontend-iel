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

  const { image, name, typeProduct, price, priceDiscount,  } = state || {};
  
  
  
  const product = {
    image: [
      { 
        src: '/images/produc-image-1.jpeg',
        thumbnail: '/images/product-thumb-1.jpeg'
      },
      { 
        src: '/images/produc-image-2.jpeg',
        thumbnail: '/images/product-thumb-2.jpeg'
      },
      { 
        src: '/images/produc-image-3.jpeg',
        thumbnail: '/images/product-thumb-3.jpeg'
      },
      { 
        src: '/images/produc-image-4.jpeg',
        thumbnail: '/images/product-thumb-4.jpeg'
      },
      { 
        src: '/images/produc-image-5.jpeg',
        thumbnail: '/images/product-thumb-5.jpeg'
      },
    ],
  
    name: name || "Produto sem nome",
    reference: "Nike REF:12345678",
    stars: 4.7,
    rating: 90,
    price: price,
    priceDiscount: priceDiscount,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercition ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
    <><div className="product-view-page">
      <div className="product-details">
        <Gallery
          images={product.image}
          showThumbs={true}
          thumbsRadius="4px" 
          width="700px"
          height="570px"
          radius="4px" />
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
            radius="4px" />
          <ProductOptions
            options={product.colors}
            shape="circle"
            type="color" />
        </BuyBox>
      </div>
    </div><div className= "listing-view">
        <Section title="Produtos Relacionados" titleAlign="left">
          <ProductListing products={relatedProducts} />
        </Section>
      </div></>
  );
}

export default ProductViewPage;
