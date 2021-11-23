
import React, {useState}from 'react'
import {Link} from 'react-router-dom'


export default function Nav() {
    
    
    const [currentPage, setCurrentPage] = useState("");
    
    const setCurrent = (curr)=>{
        setCurrentPage(curr);
    }
    
    return (
        <div className="navbar">
            <div className="nav-left">
                <img className="nav-logo" src="/react-logo.svg" alt="logo" />
            </div>
            
            <div className="nav-right">
                
                <Link to="/" className="nav-links" onClick={()=>setCurrent("Home")}>Home</Link>
                <Link to="/About" className="nav-links" onClick={()=>setCurrent("About")}>About</Link>
                <Link to="/Store" className="nav-links" onClick={()=>setCurrent("Store")}>Store</Link>
                <h3 className="current-page">{currentPage}</h3>
            </div>
        </div>
    )
}


