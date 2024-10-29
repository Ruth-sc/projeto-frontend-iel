import React from 'react';
import Logo from './Logo';
import Information from './Information';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const information = [
    {
      title: "Informação",
      items: [
        { text: "Sobre Drip Store", link: "/about" },
        { text: "Segurança", link: "/security" },
        { text: "Wishlist", link: "/wishlist" },
        { text: "Blog", link: "/blog" },
        { text: "Trabalhe conosco", link: "/careers" },
        { text: "Meus Pedidos", link: "/orders" }
      ]
    },
    {
      title: "Categorias",
      items: [
        { text: "Camisetas", link: "/category/shirts" },
        { text: "Calças", link: "/category/pants" },
        { text: "Bonés", link: "/category/caps" },
        { text: "Headphones", link: "/category/headphones" },
        { text: "Tênis", link: "/category/sneakers" }
      ]
    },
    {
      title: "Contato",
      items: [
        { text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161" },
        { text: "(85) 3051-3411" }
      ]
    }
  ];

  return (
    <footer style={{ backgroundColor: '#1F1F1F', color: '#fff', padding: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <div style={{ padding: '20px 0px 0px 20px' }}>
            <Logo 
            imagem='/assets/logo-footer.svg'/>
          </div>
          <p style={{ margin: '20px 0', maxWidth: '300px', padding: '20px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div style={{ display: 'flex', gap: '40px', padding: '20px'}}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src='../assets/facebook.svg' alt="Facebook" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src='../assets/instagram.svg' alt="Instagram" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src='../assets/twitter.svg' alt="Twitter" style={{ width: '24px', height: '24px' }} />
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0px' }}>
          {information.map((info, index) => (
            <Information key={index} title={info.title} informations={info.items} />
          ))}
        </div>
      </div>
      <hr style={{ margin: '40px 0', borderColor: '#444' }} />
      <p style={{ textAlign: 'center' }}>© {currentYear} Digital Store</p>
    </footer>
  );
};

export default Footer;
