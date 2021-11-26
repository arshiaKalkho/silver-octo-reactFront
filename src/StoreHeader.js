import React ,{useState}from 'react'

function StoreHeader(props) {
    const parentStateHandler = props.parentStateHandler;
    return (
        <div className="store-header">
            <div>
                Sale Only:
                <label class="switch">
                    <input type="checkbox" defaultChecked={false}></input>
                    <span class="slider round"></span>
                </label>Filter:
                <label class="switch">
                    <input type="checkbox" defaultChecked={true}></input>
                    <span class="slider round"></span>
                </label>
            </div>
            
            <form className="search-box"action="#" method="get">
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search products"
                    name="s" 
                />
                
                <button className="search-submit-btn"type="submit">Search</button>
            </form>
                
            
            <div>
                Sort By:
                <select className="sort-dropdown">
                    <option value="Default"> Default</option>
                    <option value="A-Z"> Alphabetical A - Z</option>
                    <option value="Z-A"> Alphabetical Z - A</option>
                    <option value="L-H"> Price Low - High</option>
                    <option value="H-L"> Price High - Low</option>
                </select>
            </div>
            <div>
                <div className="toggle-button" style={{backgroundImage:'url("/images/toggle-layout.svg")'}}></div>
            </div>
        </div>
    )
}

export default StoreHeader
