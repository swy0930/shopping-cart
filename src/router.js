import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductList from "./components/product/ProductList";
import ShoppingCart from "./components/cart/ShoppingCart";

function Router() {
    return (
      <BrowserRouter> 
          <Route exact path="/" component={ProductList} />
          <Route path="/shoppingcart" component={ShoppingCart} />
      </BrowserRouter>
    );
  }

  export default Router;