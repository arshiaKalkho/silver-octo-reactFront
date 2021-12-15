import React,{useState} from 'react'


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
                <button className="product-page-btn" onClick={()=>prevbutton()}>prev</button>
                <button className="product-page-btn" onClick={()=>nextbutton()}>next</button>
            </div>
        )
    }else{
        return (
            <div className="product-page-image" style={{textAlign: 'center', marginTop: "8rem"}}> Loading...</div>
        )
    }
}
export default ImageCarousel
