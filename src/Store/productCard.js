import React from 'react'
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
    const navigate = useNavigate();
    const backgroundURL = JSON.parse(props.product.product_image)[0];

    const layout = props.layout;
    const price = (product)=>{
        if(product.PRODUCT_SALE_PRICE != null){
            return(
                <>
                    
                    <h3 style={{color:"red"}}>{product.PRODUCT_SALE_PRICE}</h3>
                    <h5 className="crossed-price">{product.PRODUCT_PRICE}</h5>
                </>
            )
        }
        return( 
            <>
                <h3>{product.PRODUCT_PRICE}</h3>
            </>
        )
    }

    const linkTo = ()=>{
        var path = "/Store/" + props.product.PRODUCT_ID
        navigate(path);
    }

    var flexDirection;
    
    if(!layout){
        flexDirection = "row"
        
    }else{
        flexDirection = "column"
        
    }

    return (
        
            <div onClick={linkTo} className="product-card" style={{flexDirection: flexDirection}}>
                
                <div className="product-img-container" style={{backgroundImage: `url(${backgroundURL})`}}>
                </div>
                
                <div>
                    <h3>{props.product.PRODUCT_NAME}</h3>
                    {price(props.product)}
                </div>
            </div>
        
    )
}

export default ProductCard
