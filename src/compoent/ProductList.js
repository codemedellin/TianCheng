import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    
      <div className='ca'>

          {products.map((product) => (
            <div className="pro" key={product.id}>
              <div className="un">
                <div className="produ">
                  <img src={product.image}  />
                </div>
              </div>
            </div>
          ))}
        </div>

  );
          }

export default ProductList
