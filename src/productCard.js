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
                <h3>{product.PRODUCT_PRICE}</h3>
            </>
        )
    }


    return (
        <div className="product-card">
            <div className="product-img-container">
                <img 
                className="product-card-image"
                src={backgroundURL}
                />
            </div>
            <h3>{props.product.PRODUCT_NAME}</h3>
            
            {price(props.product)}
        </div>
    )
}

export default productCard
