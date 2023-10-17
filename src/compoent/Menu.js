
import React, { useState, useEffect } from 'react';
import products from './data';
import ProductList from './ProductList';
import './Menu.css';
import fondob from "../img/fondob.png";
import PList from './PList';




const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const isActiveCategory = (category) => {
    return selectedCategory === category ? 'active' : '';
  };

  // Filtrar productos por categoría
  const filteredProducts = products.filter((product) => {
    return (
      selectedCategory === '' || product.category === selectedCategory
    );
  });

  // Establecer la categoría "Entradas" al cargar la página
  useEffect(() => {
    setSelectedCategory('Entradas');
  }, []);
  
  return (
    <div className="menu-container" style={{ backgroundImage: `url(${fondob})` }}>
      <h2 className="menu-heading">Conoce Nuestro</h2>
      <h1 className="menu-heading">Menú</h1>
      <div className="button-container">
        <button
          onClick={() => handleCategoryChange('Entradas')}
          className={isActiveCategory('Entradas')}
        >
          Entradas
        </button>
        <button
          onClick={() => handleCategoryChange('Sopa')}
          className={isActiveCategory('Sopa')}
        >
          Sopa
        </button>
        <button
          onClick={() => handleCategoryChange('Platos Especiales')}
          className={isActiveCategory('Platos Especiales')}
        >
          Platos Especiales
        </button>
        <button
          onClick={() => handleCategoryChange('Promoción')}
          className={isActiveCategory('Promoción')}
        >
          Promoción
        </button>
        <button
          onClick={() => handleCategoryChange('Platos Combinados')}
          className={isActiveCategory('Platos Combinados')}
        >
          Platos Combinados
        </button>
        <button
          onClick={() => handleCategoryChange('Chow Fan')}
          className={isActiveCategory('Chow Fan')}
        >
          Chow Fan
        </button>
        <button
          onClick={() => handleCategoryChange('Chop Suey')}
          className={isActiveCategory('Chop Suey')}
        >
          Chop Suey
        </button>
        <button
          onClick={() => handleCategoryChange('Agridulce')}
          className={isActiveCategory('Agridulce')}
        >
          Agridulce
        </button>
        <button
          onClick={() => handleCategoryChange('Espaguetis')}
          className={isActiveCategory('Espaguetis')}
        >
          Espaguetis
        </button>
        <button
          onClick={() => handleCategoryChange('Cocacola')}
          className={isActiveCategory('Cocacola')}
        >
          Coca Cola
        </button>
        <button
          onClick={() => handleCategoryChange('Postobon')}
          className={isActiveCategory('Postobon')}
        >
          Postobon
        </button>
        <button
          onClick={() => handleCategoryChange('Mr Tea')}
          className={isActiveCategory('Mr Tea')}
        >
          Mr Tea
        </button>
        <button
          onClick={() => handleCategoryChange('Cervezas')}
          className={isActiveCategory('Cervezas')}
        >
          Cervezas
        </button>
        {/* Agrega más botones para otras categorías */}
</div>




<div className='z'>
<div className='y'>
<ProductList products={filteredProducts} />
</div>
<div className='x'>
<PList products={filteredProducts} />
</div>
</div>






</div>
);
};

export default Menu;






