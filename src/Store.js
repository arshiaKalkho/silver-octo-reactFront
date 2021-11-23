import React from 'react'
import StoreHeader from './StoreHeader'
import StoreSidebar from './StoreSidebar'
import Products from './Products'
function Store() {
    return (
        <div className="store">
            <StoreHeader/>
                <div className="sidebar-product-container">
                    <StoreSidebar/> 
                    <Products/>     
            </div>
        </div>

    )
}

export default Store
