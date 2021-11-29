import React from 'react'
import ProductCard from './productCard'

function Products(props) {
    return (
        <div className="products">
            {props.products.map((index)=>{
                return( <ProductCard product={index}/>)   
            }
            )}    
        </div>
    )
}

export default Products
