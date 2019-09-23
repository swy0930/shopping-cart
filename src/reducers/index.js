import {cartReducer} from './cart';
import {productsReducer} from './product';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  cart: cartReducer,
  products:productsReducer
})

export default rootReducer;