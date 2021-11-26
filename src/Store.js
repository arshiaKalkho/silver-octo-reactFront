import React, { Component } from 'react'
import StoreHeader from './StoreHeader'
import StoreSidebar from './StoreSidebar'
import Products from './Products'




export default class Store extends Component {
    constructor(){
        super();
        this.baseUrl = process.env.REACT_APP_API_URL;
        this.state = {
            filterBool: true,
            search: false,
            saleBool: false,
            order:false,
            department:false,
            minPrice:0,
            maxPrice:10000,
            perPage:32
        };
        this.DBrequestBuildeSideBar = this.DBrequestBuildeSideBar.bind(this)
        this.DBrequestBuilderHeader = this.DBrequestBuilderHeader.bind(this)
    }
    

    DBrequestBuilderHeader = (_filterOn,_search, _saleBool,_order)=>{
        
        this.setState({
            filterBool:_filterOn||this.state.filterBool,
            search:_search||this.state.search,
            saleBool:_saleBool||this.state.saleBool,
            order:_order||this.state.order
        })
        
    }
    DBrequestBuildeSideBar = (_department, _minPrice,_maxPrice)=>{
        
        console.log(this.state)
        this.setState({
        
        department:_department||this.state.department,
        minPrice:_minPrice||this.state.minPrice,
        maxPrice:_maxPrice||this.state.maxPrice
    })
    }

    componentDidMount(){//axios call to retreive data based on state
        console.log(this.state.minPrice)
    }

    constructUrlAcordingToState(){
        var temp = this.baseUrl;
        
        


        

    }
    
    updateURLString(url){
        //var completeUrl = url + 
        //this.setState({urlString : })
        
    }


    render(){
        return(
            <div className="store">
            <StoreHeader parentStateHandler={this.DBrequestBuilderHeader}/>
                <div className="sidebar-product-container">
                    <StoreSidebar parentStateHandler={this.DBrequestBuildeSideBar}/> 
                    <Products/>     
            </div>
        </div>)
        }
    }
    
    
    // getProduct(url){
    //     //make axios call to server with urlString and extra filters from dbrequestbuilder func
    // }