import React,{useState} from 'react'
import ImageCarouselFooter from './imageCarouselFooter'


function ImageCarousel(props) {


    var [currImageIndex, setCurrImageIndex] = useState(0)
    
    const nextbutton = ()=>{
        if(JSON.parse(props.image)[currImageIndex+1]){
            setCurrImageIndex(currImageIndex+1)
        }
    }
    const prevbutton = ()=>{
        if(currImageIndex > 0){
            setCurrImageIndex(currImageIndex-1)
        }
    }

    if(props.image){
        return (
            <div className="product-page-image" style={{ backgroundImage: `url(${JSON.parse(props.image)[currImageIndex]})`}}>
                <ImageCarouselFooter index={currImageIndex} imageList = {JSON.parse(props.image)}/>
                <button className="product-page-left-btn" onClick={()=>prevbutton()}> &#8656;</button>
                <button className="product-page-right-btn" onClick={()=>nextbutton()}>&#8658;</button>
            </div>
        )
    }else{
        return (
            <div className="product-page-image" style={{textAlign: 'center', marginTop: "8rem"}}> Loading...</div>
        )
    }
}
export default ImageCarousel
