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
            search: "",
            saleBool: false,
            order:"Default",
            department:false,
            minPrice:0,
            maxPrice:10000,
            perPage:32
        };
        this.DBrequestBuildeSideBar = this.DBrequestBuildeSideBar.bind(this)
        this.DBrequestBuilderHeader = this.DBrequestBuilderHeader.bind(this)
    }
    

    DBrequestBuilderHeader = (_filterOn,_search, _saleOn,_order)=>{
        
        var _filterBool = this.state.filterBool;
        var _saleBool = this.state.saleBool;
        if(_filterOn != null){
            _filterBool = !this.state.filterBool;//flip the state if argument isn't null only for type boolean 
        }
        if(_saleOn != null){
            _saleBool = !this.state.saleBool;
        }

        this.setState({
            filterBool:_filterBool,
            saleBool:_saleBool,
            search:_search||this.state.search,
            order:_order||this.state.order
        })
        
        
    }
    DBrequestBuildeSideBar = (_department, _minPrice,_maxPrice)=>{
        
        
        this.setState({
            
            department:_department||this.state.department,
            minPrice:_minPrice||this.state.minPrice,
            maxPrice:_maxPrice||this.state.maxPrice
        })
        
    }

    componentDidMount(){//axios call to retreive data based on state
    }

    constructUrlByToState(){
        //var temp = this.baseUrl;
        
        


        

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
    
    
