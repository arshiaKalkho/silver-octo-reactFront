import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class main extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <>
                <div className="main" style={{backgroundImage:"url('/buy-sell-background.jpg')"}}>
                    
                </div>
                <div className="main-body">
                    <div className="summery-cards"></div>
                    <div className="summery-cards"></div>
                    <div className="summery-cards"></div>
                </div>
            </>
        )
    }
}
