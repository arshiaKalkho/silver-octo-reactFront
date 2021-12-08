import React,{Component} from 'react'
import axios from 'axios';


const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;




export default class ProductPage extends Component {
    
    constructor(props){
        
        super(props)
        this.state={
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
    getProductFromBackend(){
        
        if(!this.currentProductId)
            return;
        
        axios.get(baseUrl + "product/" + {id:this.currentProductId, key:apiKey} ,
        {
            headers :  {'Access-Control-Allow-Origin': '*'}
        }
        ).then(response=>{
            
            this.setState({
                currentProduct:response.data
            })
            
        }).catch(err=>{console.log("Error contacting the backend: ",err)
        
            this.setState({
                currentProduct:null
            });
            
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
            <div>
                
                <h3>{this.currentProduct} </h3>
                {/* <h3>{this.currentProduct.PRODUCT_DESC}</h3> */}
            </div>
        )
    }
}

