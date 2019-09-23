import React from 'react';
import {Col, Card,Button,Form} from 'react-bootstrap';
import {currencyFormatter} from '../../utils/formatter';
import '../../css/ProductList.css';

class ProductItem extends React.Component{
    constructor(props){
        super(props);
        this.state=this.initialState();

        this.initialState=this.initialState.bind(this);
        this.onQuantityChange = this.onQuantityChange.bind(this);
    }

    initialState(){
        return {
            name:this.props.name,
            price:this.props.price,
            quantity:this.props.quantity,           
        }
    }

    onQuantityChange(e, productName){
        e.preventDefault();
        //check whether the value is integer (empty is acceptable)
        let value = e.target.value;
        let quantity = parseInt(value,10);
        if(!quantity && value) return;

        this.setState({quantity:quantity},
            ()=>{
                this.props.handleQuantityChange(quantity?quantity:value,productName);
            });
    }

    render(){
        let {name,price,quantity}=this.state;
        return(
           <Col md={6} sm={12}>
                <Card className="product-container">
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: {currencyFormatter(price)}
                    </Card.Text>
                    <Form.Group controlId={`${name}Quantity`}>
                        <label> Quantity: </label>
                        <input size="sm" className='input-select-product-quantity' id={`${name}Quantity`} name={`${name}Quantity`} type="number" value={quantity?quantity:""} onChange={(e)=>this.onQuantityChange(e,name)}/>
                    </Form.Group>
                    <Button variant="primary" onClick={(e)=>this.props.handleAddToCart(e,name)}>Add to Cart</Button>
                </Card.Body>
                </Card>
            </Col>  
        );
    }

}
  
export default ProductItem;
 