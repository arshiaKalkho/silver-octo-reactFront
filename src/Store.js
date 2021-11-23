import React from 'react'
import StoreHeader from './StoreHeader'

function Store() {
    return (
        <div className="store">
            <StoreHeader/>
                <div className="sidebar-product-container">
                    <div className="store-sidebar">
                        Sidebar
                    </div>
                    <div className="products">
                        products    
                    </div>                
            </div>
        </div>

    )
}

export default Store
