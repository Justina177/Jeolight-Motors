import React from 'react';
import data from '../data';


function HomePage() {
  return (
  <div>
    <h1>Featured products</h1>
  <div className="products">
    {
    data.products.map((product) => (
    <div className="product" key={product.slug}>
      <a href={`/product/${product.slug}`}>
      <img src={product.image} alt={product.name} />
      </a>
      <div className="product-info">
      <a href={`/product/${product.slug}`}>
      <p>{product.name}</p>
      </a>
      <p>{product.price}</p>
      <a href={`/product/${product.slug}`}>
      <button>View More</button>
      </a>
    </div>
  </div>

  
  ))};
  </div>
  </div>
);
}

export default HomePage;
