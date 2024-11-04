import React from 'react';
import { Link } from "react-router-dom";
import '../css/NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src='/images/404-page-not-found.jpg' alt="Página não encontrada" className="not-found-image" />
      <h3>Página não encontrada</h3>
      <p>A página que você está procurando não existe ou foi removida.</p>
      <Link to="/" className="back-link">Voltar para a página inicial</Link>
    </div>
  );
}

export default NotFound;
