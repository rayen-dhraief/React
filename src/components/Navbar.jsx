// Navbar.jsx
import React from 'react';

const NavigationBar = () => {
  return (
    <nav>
      {/* Ajoutez ici le contenu de votre barre de navigation */}
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/produits">Produits</a></li>
        <li><a href="/panier">Panier</a></li>
        {/* Ajoutez d'autres liens selon vos besoins */}
      </ul>
    </nav>
  );
};

export default NavigationBar;
