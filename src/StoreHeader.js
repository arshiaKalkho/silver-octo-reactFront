import React ,{useState}from 'react'

function StoreHeader(props) {
    const parentStateHandler = props.parentStateHandler;
    const[searchString, setSearchString] = useState("")
    
    
    const handleSearchInput = (e)=>{
        setSearchString(e.target.value)
        
    }
    const handleSearchSubmit = (e)=>{
        e.preventDefault();
        
        parentStateHandler(null,searchString,null,null)

    }
    return (
        <div className="store-header">
            <div>
                Sale Only:
                <label class="switch">
                    <input onChange={(e)=>parentStateHandler(null,null,e.target.checked,null)} type="checkbox" defaultChecked={false}></input>
                    <span class="slider round"></span>
                </label>Filter:
                <label class="switch">
                    <input onChange={(e)=>parentStateHandler(e.target.checked,null,null,null)} type="checkbox" defaultChecked={true}></input>
                    <span class="slider round"></span>
                </label>
            </div>
            
            <form className="search-box" onSubmit={(e)=>{handleSearchSubmit(e)}} onChange={(e)=>handleSearchInput(e)} method="get">
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
                <select className="sort-dropdown"  onChange={(e)=>parentStateHandler(null,null,null,e.target.value)}>
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
