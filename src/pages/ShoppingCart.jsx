import React from 'react';
import {Row,Button} from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { deleteFromCart } from "../actions/cart";
import sumBy from 'lodash/sumBy';
import {Table,Container} from 'react-bootstrap';
import CartItem from '../components/cart/CartItem';
import {currencyFormatter} from '../utils/formatter';
import { TiArrowBack } from "react-icons/ti";

class ShoppingCart extends React.Component{
    constructor(props){
        super(props);
        this.handleRemove=this.handleRemove.bind(this);
    }

    handleRemove(e, productName){
        e.preventDefault();
        this.props.deleteFromCart(productName);
    }

    render(){
        let {cart, history} = this.props;
        //sum the total price of each product
        let totalProductPrice=sumBy(cart, function(o) { return o.total; });
        return(
           <Container>
               <h2>Shopping Cart</h2>
               <Row className="margin10"><Button variant="primary" onClick={()=>history.push('/')}><TiArrowBack size="22px"/> Back</Button></Row>
               <Row>
                    <Table>
                        <thead>
                            <tr>
                                <th width="30%">Product</th>
                                <th width="10%">Price</th>
                                <th width="10%">Quantity</th>
                                <th width="20%">Total</th>
                                <th width="30%"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {cart.length===0 && <tr><td colSpan="5">You haven't choose any products yet. Please go back and add some.</td></tr>}
                        {cart.length>0 && cart.map((item,index)=>{
                            return <CartItem key={item.name} item={item} index={index} handleRemove={this.handleRemove}/>
                        })}
                        {cart.length>0 && <tr>
                            <td colSpan="3" align="right"> Total Price:</td>
                            <td align="right">{currencyFormatter(totalProductPrice)}</td>
                        </tr>}
                        </tbody>
                    </Table>
               </Row>
           </Container>     
        );
    }

}

const mapStateToProps = (state) => {
    return {
      cart: state.cart
    }
  }

const mapDispatchToProps = dispatch => {
  return {
      dispatch,
      ...bindActionCreators({ deleteFromCart }, dispatch)
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ShoppingCart);