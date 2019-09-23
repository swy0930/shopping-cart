import * as actionTypes from "./actionTypes";

export function addToCart(product) {
    return {type: actionTypes.ADD_PRODUCT_TO_CART, product };
};

export function deleteFromCart(productName) {
    return {type: actionTypes.DELETE_PRODUCT_FROM_CART, productName };
};