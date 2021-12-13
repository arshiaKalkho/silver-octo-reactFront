import React,{useState} from 'react'


function ImageCarousel(props) {


    const [currImageIndex, setCurrImageIndex] = useState(0)
    
    
    return (
        <div className="product-page-image" style={{ backgroundImage: `url(${props.image})`}}>
            
        </div>
    )
}

export default ImageCarousel
