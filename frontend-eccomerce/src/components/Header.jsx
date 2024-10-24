import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'primeicons/primeicons.css';
import Logo from './Logo';
import Navigation from './Navigation';
import '../css/Header.css';

const Header = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/products?filter=${query}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header style={{ display: 'flex', flexDirection: 'column', padding: '20px 70px', }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
        <Logo 
        imagem='/assets/logo-header.svg'
        />
        <div className="search-container" style={{ display: 'flex', alignItems: 'center', flexGrow: 1, marginLeft: '20px', marginRight: '20px', position: 'relative' }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Pesquisar produto..."
            style={{ padding: '15px 32px 15px 17px', flex: 1, borderRadius: '7px', border: '1px solid #FFFF', color:'#fff' }}
          />
          <i
            className="pi pi-search search-icon"
            onClick={handleSearch}
            style={{ cursor: 'pointer', position: 'absolute', right: '8px', fontSize: '1.2rem', color: '#ccc' }}
          ></i>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a
            href="/register"
            style={{
              fontSize: '16px',
              color: '#555',
              textDecoration: 'underline',
              marginRight: '16px'
            }}
          >
            Cadastre-se
          </a>
          <a
            href="/login"
            style={{
              fontSize: '14px',
              color: '#fff',
              backgroundColor: '#C92071',
              padding: '10px 16px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block',
              height: '20px',
              width: '60px',
              alignContent: 'center',
              textAlign: 'center'
            }}
          >
            Entrar
          </a>
          <div style={{ position: 'relative', marginLeft: '16px' }}>
            <img src='/assets/mini-cart.svg' alt="Carrinho de Compras" style={{ width: '24px', height: '24px' }} />
            <div style={{ position: 'absolute', top: '-5px', right: '-5px', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              0
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
