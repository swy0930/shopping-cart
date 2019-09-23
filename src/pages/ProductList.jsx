import React from 'react';
import {Row, Button, Container} from 'react-bootstrap';
import cloneDeep from 'lodash/cloneDeep';
import { addToCart } from "../actions/cart";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import sumBy from 'lodash/sumBy';
import ProductItem from '../components/product/ProductItem';
import { FaShoppingCart } from 'react-icons/fa';

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state=this.initialState();

        this.initialState=this.initialState.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    initialState(){
        let products = cloneDeep(this.props.products);
        //assign 1 to the quantity of each product by default
        if(products) products.forEach((p)=> p.quantity=1);
        let state ={
            products:products,
        }   
        return state;
    }

    handleQuantityChange(quantity, productName){
        let products = cloneDeep(this.state.products);
        let product = products.find((item)=>item.name===productName);
        //update the quantity if the product exists
        if(product){
            product.quantity = quantity;
            this.setState({products:products});
        }
    }

    handleAddToCart(e, productName){
        e.preventDefault();
        let product = this.state.products.find((item)=>item.name===productName);
        if(product){
            //check whether the quantity is valid, it could be empty
            let product =  this.state.products.find((item)=>item.name===productName);
            if(product.quantity){
                this.props.addToCart({
                    name:product.name,
                    price:product.price,
                    total:product.price*product.quantity,
                    quantity:product.quantity
                });
            }else{
                alert("Please enter a valid quantity.");
            }
        }
    }

    render(){
        let {products} =this.state;
        let {cart} = this.props;
        //sum the quantity of each product
        let totalQuantity = sumBy(cart, function(o) { return o.quantity; })
        return(
           <Container>
               <h2>Welcome to Bling Bling store</h2>
               <h4>Any Tools you'd like to buy?</h4>
               <div className="button-shopping-cart"><Button variant="primary" onClick={()=>this.props.history.push('/shoppingcart')}><FaShoppingCart /> ({totalQuantity})</Button></div>
               <Row>
               {
                    products && products.map((item)=>{
                        return <ProductItem key={item.name} name={item.name} price={item.price} quantity={item.quantity} 
                                handleQuantityChange={this.handleQuantityChange} handleAddToCart={this.handleAddToCart}/>
                    })
               }
               </Row>
           </Container>     
        );
    }

}

const mapStateToProps = (state) => {
    return {
      cart: state.cart,
      products:state.products
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        ...bindActionCreators({ addToCart }, dispatch)
    }
}
  
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ProductList);
