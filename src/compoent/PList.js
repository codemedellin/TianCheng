import React, { useState } from 'react';
import './PList.css';

const PList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = (productName) => {
    if (selectedProduct === productName) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(productName);
    }
  };

  return (
    <div className='cajon'>
      {products.map((product) => (
        <div
          className={`producto ${selectedProduct === product.name ? 'selected' : ''}`}
          key={product.name}
          onClick={() => handleClick(product.name)}
        >
          <div className='product-details'>
            <div className='n'>
              <h3 className={`name ${selectedProduct === product.name ? 'selected' : ''}`}>
                {product.name}
              </h3>
            </div>
            <div className='p'>
              <p className={`price ${selectedProduct === product.name ? 'selected' : ''}`}>
                {product.price}
              </p>
              <p className={`price ${selectedProduct === product.name ? 'selected' : ''}`}>
                {product.pricep}
              </p>
              <p className={`price ${selectedProduct === product.name ? 'selected' : ''}`}>
                {product.pricem}
              </p>
              <p className={`price ${selectedProduct === product.name ? 'selected' : ''}`}>
                {product.priceg}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PList;
