import React from 'react'
import ProductCard from './productCard'

function Products(props) {
    
    if(props.products !== []){console.log(props.products)
        return (
            <div className="products">
                {
                    props.products.map((index)=>{
                        return( <ProductCard product={index}/>)   
                    })
                }    
            </div>
        )
    }else{
        return(
            <>
                No product were found with the current filter configuration
            </>
        )
    }
}

export default Products
