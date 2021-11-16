
import React from 'react'
import {Link} from 'react-router-dom'

function nav() {
    return (
        <div className="navbar">
            <div className="nav-left">
                <img className="nav-logo" src="/react-logo.svg" alt="logo" />
            </div>
            <div className="nav-right">
                <Link to="/" className="nav-links">Home</Link>
                <Link to="/About" className="nav-links">About</Link>
            </div>
        </div>
    )
}

export default nav
