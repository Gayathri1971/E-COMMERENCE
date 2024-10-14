import React from 'react';

export function Products(props) {
    return(
        <div className='productList'>
            <div key={props.name} className='productCard'>
                <img src={props.image} alt='product-img' className='productImage'></img>

                <div className='productContent'>
                    <h3 className='productName'>{props.name}</h3>
                    <div className='displayStack'>
                        <div className='productDescription'>{props.description} </div>
                        <div className='productPrice'>${props.priceRange}</div>
                        <div className='productRate'>{props.rating} </div>
                        <div className='productRange'>{props.priceRange} </div>
                        <div className='productColor'>{props.color} </div>

                    </div>
                   
                </div>
            </div>
        </div>
    )
}
