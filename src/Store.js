import React, { Component } from 'react'
import StoreHeader from './StoreHeader'
import StoreSidebar from './StoreSidebar'
import Products from './Products'
import axios from 'axios'


const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;


export default class Store extends Component {
    constructor(){
        super();
        this.state = {
            products : [],
            filterBool: true,
            search: "",
            saleBool: false,
            order:"Default",
            department:false,
            minPrice:1,
            maxPrice:10000,
            perPage:32
        };
        
        this.DBrequestBuildeSideBar = this.DBrequestBuildeSideBar.bind(this)
        this.DBrequestBuilderHeader = this.DBrequestBuilderHeader.bind(this)
    }
    

    DBrequestBuilderHeader = (_filterOn,_search, _saleOn,_order)=>{
        
        var _filterBool = this.state.filterBool;
        var _saleBool = this.state.saleBool;
        var _searchQ;
        if(_filterOn != null){
            _filterBool = !this.state.filterBool;//flip the state if argument isn't null only for type boolean 
        }
        if(_saleOn != null){
            _saleBool = !this.state.saleBool;
        }
        if(_search === ""){
            _searchQ = ""
        }else if(null){
            _searchQ = this.state.search;
        }else{
            _searchQ = _search
        }
        

        
        this.setState({
            filterBool:_filterBool,
            saleBool:_saleBool,
            search:_searchQ,
            order:_order||this.state.order
        },()=>{
            
            this.products = this.getProductFromBackend()
        })
        
        
    }
    DBrequestBuildeSideBar = (_department, _minPrice,_maxPrice)=>{
        
        var tempDepartment = this.state.department;
        if(_department === false)
            tempDepartment = false;
        else if(_department != null)
            tempDepartment = _department;
        
        this.setState({
            
            department:tempDepartment,
            minPrice:_minPrice||this.state.minPrice,
            maxPrice:_maxPrice||this.state.maxPrice
        },()=>{
            
            this.products = this.getProductFromBackend()
        })
    }
    getProductFromBackend(){
        
        axios.get(baseUrl + "products/" + this.constructUrlByToState(),
        {
            headers :  {'Access-Control-Allow-Origin': '*'}
        }
        ).then(response=>{
            
            this.setState({
                products:response.data
            })
            
        }).catch(err=>{console.log("Error contacting the backend: ",err)
        
            this.setState({
                products:[]
            });
        })
    }

    componentDidMount(){
        this.products = this.getProductFromBackend()
    }
    

    constructUrlByToState(){
        
        var rqeuestObj = {
            isFilterOn:this.state.filterBool,
            searchFor:this.state.search,
            isOnSale:this.state.saleBool,
            department:this.state.department,
            minPrice:this.state.minPrice,
            maxPrice:this.state.maxPrice,
            orderBy:this.state.order,
            perPage:this.state.perPage,
            key:apiKey
        };
        
        return JSON.stringify(rqeuestObj);
        
    }
    
     


    render(){
        return(
            <div className="store">
            <StoreHeader parentStateHandler={this.DBrequestBuilderHeader}/>
                <div className="sidebar-product-container">
                    <StoreSidebar parentStateHandler={this.DBrequestBuildeSideBar}/> 
                    <Products products = {this.state.products || []} />     
            </div>
        </div>)
        }
    }
    
    
