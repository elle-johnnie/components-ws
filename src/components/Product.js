import React from 'react';
import './Product.css'
// Create a Product component, which takes a name, a product
// photo URL, a standard price, and a discount price. If the
// discounted price is less than the standard price then the component
// should display the discounted price
// with some visual indicator (e.g. the price text is red).


const Product = (props) => {
    return (
        <section className="prod">
            <img alt={props.alt} src={props.image} className="product-img"/>
            <p className='product-name'>{props.name}</p>
            <p className='no-deal'>{props.price}</p>
            <p className={props.discount >= 1 ? "deal" : "hide"}>{props.price}</p>
        </section>
    )
};

export default Product;