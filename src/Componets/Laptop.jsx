import React from 'react';
import { laptop } from './Data';
import { Link } from 'react-router-dom';

export default function Laptop() {
  return (
    <>
      <p className='cat-main' id='Laptops'>Laptops</p>
      
      <div className='container'>
        {laptop.map((item) => (
          <div className='container-main' key={item.id}> 
            <Link to={`/laptop/${item.id}`}> 
              <img src={item.image} alt={item.brand} />
            </Link>
            <div className='details'>
              <h2 className='brand'>{item.brand} {item.model}</h2>
              <pre>Price: ${item.price} <strike>${1000}</strike></pre>
              <p className='desc'>{item.description}</p>
              <a className='buy-now'>Buy Now</a>
              {/* Conditional rendering for stock availability */}
              {item.stock > 0 ? (
                <span className='in-stock'>In Stock</span>
              ) : (
                <span className='out-of-stock'>Out of Stock</span>
              )}
              {item.stock < 5 && (
                <span className='low-stock'>Hurry, only {item.stock} left!</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
