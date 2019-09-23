import {initialState} from '../store/initialState';
import {createReducer} from './createReducer';

export const productsReducer = createReducer(initialState.products, {});