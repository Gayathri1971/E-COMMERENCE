import React from 'react';
import { Link } from 'react-router-dom'; 
import { mobile } from './Data';

export default function Mobile() {
    return (
        <div className='main'>
            <p className='cat-main' id='Mobile'>Mobile</p>
            <div className='container'>
                {mobile.map((item) => (
                    <div className='container-main' key={item.id}>
                        <Link to={`/mobile/${item.id}`}>
                            <img src={item.image} alt={item.brand} />
                        </Link>
                        <div className='details'>
                            <h2 className='brand'>{item.brand} {item.model}</h2>
                            <pre>Price: ${item.price} <strike>${1000}</strike></pre>
                            <p className='desc'>{item.description}</p>
                            <a className='buy-now'>Buy Now</a>
                            
                            {item.stock > 0 ? (
                                <span className='in-stock'>In Stock</span>
                            ) : (
                                <span className='out-of-stock'>Out of Stock</span>
                            )}
                            {item.stock < 5 && (
                                <span className='low-stock'> {item.stock} left!</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
