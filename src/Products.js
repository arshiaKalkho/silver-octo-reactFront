import React from 'react'
import ProductCard from './productCard'

function Products(props) {
    
    var layoutC, layoutW = ""
    
    if(props.layout || window.innerWidth < 550){//for normal grid
        layoutC = 'auto-fit'
        layoutW = '20rem'
    }else{//1 row only grid
        layoutC= '1' 
        layoutW= '90%'
    }

    if(props.products !== null){
        return (
            <div className="products" style={{gridTemplateColumns: `repeat(${layoutC}, ${layoutW}) ` }}>
                {
                    props.products.map((index)=>{
                        return( <ProductCard key={index.PRODUCT_ID} product={index} layout={props.layout}/>)   
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
