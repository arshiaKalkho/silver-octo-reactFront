import React from 'react'

function imageCarouselFooter(props) {
    var Index = 0;
    return (
        <div className="image-carousel-footer">
            {props.imageList.map((index)=>{
                
            if(Index ===  props.index){
                Index++;
                return <div className="carousel-footer-picked-image" style={{ backgroundImage: `url(${index})`}}/>
                
            }else{
                Index++;
                return <div className="carousel-footer-image" style={{ backgroundImage: `url(${index})`}}/>
            }
        })}
        </div>
    )
}

export default imageCarouselFooter
