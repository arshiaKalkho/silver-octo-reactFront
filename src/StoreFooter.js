import React from 'react'

function StoreFooter(props) {
    const pageHandeler = props.pageHandeler;
    return (
        <div className="store-footer">
            <div>
                perPage:
                <select className="sort-dropdown"  onChange={(e)=>pageHandeler(null,e.target.value)}>
                        <option value="16"> 16</option>
                        <option value="32"> 32</option>
                        <option value="64"> 64</option>
                    
                </select>
            </div>
            
            <div ckassName="page-counter">
                <button>prev</button>
                count
                <button>next</button>
            </div>
            
        </div>
    )
}

export default StoreFooter
