import React from 'react'

function productCard(props) {
    
    const backgroundURL = props.product.PRODUCT_IMAGE;
    const layout = props.layout;
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



    var flexDirection;
    
    if(!layout){
        flexDirection = "row"
        
    }else{
        flexDirection = "column"
        
    }

    return (
        <div className="product-card" style={{flexDirection: flexDirection}}>
            <div className="product-img-container" style={{backgroundImage: `url(${backgroundURL})`}}>
            </div>
            <div>
                <h3>{props.product.PRODUCT_NAME}</h3>
                {price(props.product)}
            </div>
        </div>
    )
}

export default productCard
