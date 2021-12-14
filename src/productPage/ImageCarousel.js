import React,{useState} from 'react'


function ImageCarousel(props) {


    //const [currImageIndex, setCurrImageIndex] = useState(0)
    
    if(props.image){
        return (
            <div className="product-page-image" style={{ backgroundImage: `url(${JSON.parse(props.image)[0]})`}}>
                
            </div>
        )
        }else{
            return (
                <div className="product-page-image" style={{textAlign: 'center', marginTop: "8rem"}}> Loading...</div>
            )
        }
}
export default ImageCarousel
