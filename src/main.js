import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class main extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <>
                <div className="main" style={{backgroundImage:"url('/main-top-background.jpg')"}}>
                
                    <div className="main-invite">
                        <h1>Buy and sell </h1>
                        <p>Buy and sell your product on our platform for free, Let us worry about shipping, hadeling, payment and even wearhousing if neccesary.</p>
                    </div>
                    <div className="main-shipping-image" style={{backgroundImage:"url('/shipping.jpg')"}}>
                        <p>take a break, make it easier on yourself.</p>
                    </div>
                </div>
                <div className="main-body">
                    <div className="summery-cards">
                        <h1>1</h1>
                        
                    </div>
                    <div className="summery-cards">
                        <h1>2</h1>
                    </div>
                    <div className="summery-cards">
                        <h1>3</h1>
                    </div>
                </div>
            </>
        )
    }
}
