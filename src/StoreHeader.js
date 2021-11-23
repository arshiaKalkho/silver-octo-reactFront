import React from 'react'

function StoreHeader() {
    return (
        <div className="store-header">
            <div>
            </div>
            <div>
                Filter:
                <label class="switch">
                    <input type="checkbox" defaultChecked={true}></input>
                    <span class="slider round"></span>
                </label>
                
            </div>
            <div>

            </div>
        </div>
    )
}

export default StoreHeader
