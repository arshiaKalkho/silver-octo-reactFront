

import React,{useState} from 'react'

function StoreSidebar(props) {

    const parentStateHandler = props.parentStateHandler;
    
    
    
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
            <h4>Departments</h4>
            <div className="catagory-collapse" style={{visibility:`${visibility}`, height:`${height}`}}>
                <div onClick={()=>parentStateHandler(false, null, null)}>All</div>
                <div onClick={()=>parentStateHandler("Electronics", null, null)}>Electronics</div>
                <div onClick={()=>parentStateHandler("Clothes", null, null)}>Clothes</div>
                <div onClick={()=>parentStateHandler("Outdoors", null, null)}>Outdoors</div>
                <div onClick={()=>parentStateHandler("Toys", null, null)}>Toys</div>
                <div onClick={()=>parentStateHandler("Computers", null, null)}>Computers</div>
                <div onClick={()=>parentStateHandler("Gadgets", null, null)}>Gadgets</div>
            </div>
            <div className="collapse-tag" onClick={()=>{toggleState()}}>{collapse}</div>

            <h4>Price</h4>
            <div className="price-minmax">
                
                <div>
                    From:
                    <input onChange={(e)=>{parentStateHandler(null, e.target.value, null)}} type="number" step="10" min="0" max="10000" />
                    <br/>
                </div>
                
                <div>
                    To:
                    <input onChange={(e)=>{parentStateHandler(null, null, e.target.value)}} type="number" step="10" min="10" max="10000" />
                </div>
                
                <button  className="minMax-reset-btn"onClick={()=>{parentStateHandler(null, 1, 10000, null)}}>Reset Price</button>
            </div>
        </div>
    )
}

export default StoreSidebar
