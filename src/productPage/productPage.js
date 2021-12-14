import React,{Component} from 'react'
import axios from 'axios';
import ImageCarousel from './ImageCarousel';

const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;




export default class ProductPage extends Component {
    
    constructor(props){
        
        super(props)
        this.state={
            crossedPriceStyle:"",
            currentProductId:0,
            currentProduct: {}
        }
        this.childStateHandlerID = this.childStateHandlerID.bind(this)
    }
    childStateHandlerID(id){
        this.setState({
            currentProductId:id
        })
    }
    crossNotSalePrice(){
        if(!this.state.currentProduct.PRODUCT_SALE_PRICE)
            return ""
        return"crossed-price"
    }

    getProductFromBackend(){
        
        
        
        axios.get(baseUrl + "product/" + JSON.stringify({id:this.state.currentProductId, key:apiKey}) ,
        {
            headers :  {'Access-Control-Allow-Origin': '*'}
        }
        ).then(response=>{
            this.setState({//data is an array
                currentProduct:response.data[0]
            })
            

        
        }).catch(err=>{console.log("Error contacting the backend: ",err)
        
            // this.setState({
            //     currentProduct:null
            // });
            
        })
        
    }
    componentDidMount(){
        this.setState({
            currentProductId : this.props.id
        },()=>{
            this.getProductFromBackend()
            
        })
        
        
    }


    render() {
        return(
            <div className="product-page">
                
                <div className="product-page-left">
                    <ImageCarousel image={this.state.currentProduct.product_image}/>
                </div>

                <div className="product-page-right">
                    <h2>{this.state.currentProduct.PRODUCT_NAME} </h2>
                    <h3 className={this.crossNotSalePrice()}>{this.state.currentProduct.PRODUCT_PRICE} </h3>
                    <h3 style={{color: "red"}}>{this.state.currentProduct.PRODUCT_SALE_PRICE||null} </h3>
                    <p>{this.state.currentProduct.PRODUCT_DESC}</p>
                    <button className="addtocart-btn">Add to cart</button>
                </div>
                
            </div>
        )
    }
}

