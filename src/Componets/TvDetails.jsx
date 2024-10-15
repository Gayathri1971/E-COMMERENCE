import React from 'react';
import { useParams } from 'react-router-dom';
import { tv } from './Data';

export default function ProductDetail() {
    const { id } = useParams(); 
    const item = tv.find(t => t.id === parseInt(id)); 

    if (!item) {
        return <p>TV not found!</p>; 
    }

    return (
        <div className="tv-detail"> 
            <img src={item.image} alt={`${item.brand} ${item.model}`} />
            <h2>{item.brand} {item.model}</h2>
            <pre>Price: ${item.price} <strike>${1000}</strike></pre>
            <p>{item.description}</p>
            <a className='buy-now'>Buy Now</a>
            {item.price > 100 && <span className='badge bg-info'>Free Shipping!</span>}  
            <span className={item.stock > 0 ? 'in-stock' : 'out-of-stock'}>
                {item.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
            {item.stock < 5 && <span className='low-stock'>Hurry, only {item.stock} left!</span>}
        </div>
    );
}
