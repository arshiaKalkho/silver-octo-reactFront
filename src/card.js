import React from 'react'

function card(props) {
    const title = props.title;
    const body = props.body;
    
    return (
        <div className="card">
            <h1>{title}</h1>
            <p>{body}</p>        
        </div>
    )
}

 export default card
