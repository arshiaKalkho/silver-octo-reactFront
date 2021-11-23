
import { height } from 'dom-helpers'
import React,{useState} from 'react'

function StoreSidebar() {

    
    const [visibility, setVisibility] = useState("visible")
    const [height, setHeight] = useState("fit-content")
    const [collapse, toggleCollapse] = useState("collapse")

    
    const toggleState = ()=>{
        if(collapse === "collapse"){
            toggleCollapse("expand")
            setVisibility("hidden")
            setHeight("0")
            
        }else{
            toggleCollapse("collapse")
            setVisibility("visible")
            setHeight("fit-content")
        }
    }
    
    return (
        <div className="store-sidebar">
            <h4>Catagories</h4>
            <div className="catagory-collapse" style={{visibility:`${visibility}`, height:`${height}`}}>
                <div>Electronics</div>
                <div>Clothes</div>
                <div>Outdoors</div>
                <div>Toys</div>
                <div>Computers</div>
                <div>Gadgets</div>
            </div>
            <div className="collapse-tag" onClick={()=>{toggleState()}}>{collapse}</div>

            <h4>Price</h4>
            <div className="price-minmax">
                From:
                <input type="number" step="10" min="0" max="10000" />
                <br/>
                To:
                <input type="number" step="10" min="1" max="10000" />
            </div>
        </div>
    )
}

export default StoreSidebar
