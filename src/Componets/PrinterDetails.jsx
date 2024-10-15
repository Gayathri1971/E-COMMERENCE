import React from 'react';
import { useParams } from 'react-router-dom';
import { printer } from './Data'; 

export default function ProductDetail() {
    const { id } = useParams(); 
    const item =printer.find(l => l.id === parseInt(id)); 

    if (!item) {
        return <p>printer not found!</p>; 
    }

    return (
        <div className="printer-detail"> 
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
