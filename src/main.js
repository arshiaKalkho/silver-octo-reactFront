import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './card'


export default class main extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <>
                <div className="main" style={{backgroundImage:"url('/images/main-top-background.jpg')"}}>
                
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
                            <div className="main-widget-layer-inner"style={{backgroundImage:"url('/images/shipping.jpg')"}}>

                            </div>
                        </div>
                        <div className="main-widget-layer">
                            <div className="main-widget-layer-inner" style={{backgroundImage:"url('/images/payment.jpg')"}}></div>
                            <div className="main-widget-layer-inner">
                                <h3>handle tranactions</h3>
                                <p>we handle transaction, weater using shopify, paypal or visa.</p>
                            </div>

                        </div>
                        <div className="main-widget-layer">
                            <div className="main-widget-layer-inner"><h3>and store</h3>
                                <p>Don't have storage, As long as your a member you have access to our wearhouses to store your product.</p>
                                </div>
                            <div className="main-widget-layer-inner" style={{backgroundImage:"url('/images/wearhouse.jpg')"}}>
                                
                            </div>
                            
                        </div>
                    </div>
                
                
                
                
                
                
                
                </div>



                <div className="main-header">
                    <h1>Why Us?</h1>
                </div>
                
                <div className="main-body">
                    <div className="summery-cards">
                        <Card title={1} body={"Our company siplifies the process, wether your a professional or beginner our scalable products allow you to conect to your customers and/or stores. Adding a personal touch with incentives deals and free shipment using world class cargo companies including Fedex and UPS."}/>
                        
                    </div>
                    <div className="summery-cards">
                        
                        <Card title={2} body={"You don't need to handle return anymore, Our team got you covered with free returns in the continental US. And for sellers our shipping rates are the lowest on the market on returns allowing for a more open and easy return policy. So our customers and their customer stay as happy as possible."}/>
                    </div>
                    <div className="summery-cards">
                        <Card title={3} body={"we have the greatest deals on our wearhouses, completely scalable products for anything from a toothbrush to a tracktor. Our state of the arc wearhouses stacked with robotic technology allows for automated system and intant accurate updates on all stored products, All at a great price."}/>
                        
                    </div>
                    
                </div>
            </>
        )
    }
}
