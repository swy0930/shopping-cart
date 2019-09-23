import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ShoppingCart from "./pages/ShoppingCart";

function Router() {
    return (
      <BrowserRouter> 
          <Route exact path="/" component={ProductList} />
          <Route path="/shoppingcart" component={ShoppingCart} />
      </BrowserRouter>
    );
  }

  export default Router;