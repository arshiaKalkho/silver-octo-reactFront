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
                
                    <div className="main-welcome">
                        <h1>Buy and sell </h1>
                        <p>Buy and sell your product on our platform for free, Let us worry about shipping, hadeling, payment and even wearhousing if neccesary.</p>
                    </div>
                    <div className="main-widget" >
                        <div className="main-widget-layer" >
                            <div className="main-widget-layer-inner">
                                <h3>we ship</h3>
                                <p>our premium member ship gives you access to unlimited shipments in the continental US</p>
                            </div>
                            <div className="main-widget-layer-inner"style={{backgroundImage:"url('/shipping.jpg')"}}>

                            </div>
                        </div>
                        <div className="main-widget-layer">
                            <div className="main-widget-layer-inner" style={{backgroundImage:"url('/payment.jpg')"}}></div>
                            <div className="main-widget-layer-inner">
                                <h3>handle tranactions</h3>
                                <p>we handle transaction, weater using shopify, paypal or visa.</p>
                            </div>

                        </div>
                        <div className="main-widget-layer">
                            <div className="main-widget-layer-inner"><h3>and store</h3>
                                <p>Don't have storage, As long as your a member you have access to our wearhouses to store your product.</p>
                                </div>
                            <div className="main-widget-layer-inner" style={{backgroundImage:"url('/wearhouse.jpg')"}}>
                            </div>
                            
                        </div>
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
