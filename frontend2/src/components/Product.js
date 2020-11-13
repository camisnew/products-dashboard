import React from 'react';

export default function Product(props) { 
    return (
        <div className="product">
            <p>{props.image}</p>
            <p>{props.id}</p>
            <p>{props.description}</p>
            <p>{props.category}</p>
            <p>{props.price}</p>
            <p>{props.brand}</p>
        </div>
    );
}