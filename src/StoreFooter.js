import React from 'react'

function StoreFooter(props) {
    const pageHandeler = props.pageHandeler;
    const currentPage = props.currentPage;
    return (
        <div className="store-footer">
            <div>
                perPage:
                <select className="sort-dropdown"  onChange={(e)=>pageHandeler(e.target.value,null)}>
                        <option value="16"> 16</option>
                        <option value="24"> 24</option>
                        <option value="32"> 32</option>
                    
                </select>
            </div>
            
            <div className="page-counter">
                <button onClick={()=>pageHandeler(null,false)}>prev</button>
                {currentPage}
                <button onClick={()=>pageHandeler(null,true)}>next</button>
            </div>
            
        </div>
    )
}

export default StoreFooter
