import React from 'react'

function productCard(props) {
    
    const backgroundURL = props.product.PRODUCT_IMAGE;
    const price = (product)=>{
        if(product.PRODUCT_SALE_PRICE != null){
            return(
                <>
                    
                    <h3 style={{color:"red"}}>{product.PRODUCT_SALE_PRICE}</h3>
                    <h5 style={{color:"lightgrey"}}>{product.PRODUCT_PRICE}</h5>
                </>
            )
        }
        return( 
            <>
                <h4>{product.PRODUCT_PRICE}</h4>
            </>
        )
    }


    return (
        <div className="product-card">
            <img 
            className="product-card-image"
            src={backgroundURL}
            alt="image not available"
            />
            <h3>{props.product.PRODUCT_NAME}</h3>
            
            {price(props.product)}
        </div>
    )
}

export default productCard
