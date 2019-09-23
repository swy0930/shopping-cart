import cloneDeep from 'lodash//cloneDeep';
import {initialState} from '../store/initialState';
import {createReducer} from './createReducer';

function addToCart(cart,action){
  let clonedCart = cloneDeep(cart);
  let existingProduct = clonedCart.find((item)=>item.name===action.product.name);
  //if the product is already added, increase the quantity and total
  if(existingProduct) {
    existingProduct.quantity+=action.product.quantity;
    existingProduct.total+=action.product.price;
  }else{
    clonedCart = clonedCart.concat(action.product)
  }
  return clonedCart;
}

function deleteFromCart(cart,action){
  let clonedCart = cloneDeep(cart);
  //remove the product
  let updatedCart = clonedCart.filter((item)=>item.name!==action.productName);
  return updatedCart;
}

export const cartReducer = createReducer(initialState.cart, {
  ADD_PRODUCT_TO_CART: addToCart,
  DELETE_PRODUCT_FROM_CART: deleteFromCart,
});