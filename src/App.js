import React,{useEffect} from "react";
import ProductList from "./components/products/productList/ProductList";
import {useDispatch,useSelector} from 'react-redux'
import NavbarHeader from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundry from "./components/ErrorBoundry";
import {addToCart} from './redux/action/productAction'
import SinglePageProduct from "./components/products/singlePageProduct/singlePageProduct";
import Cart from "./components/Cart/Cart";
import UserForm from "./components/User/UserForm";
const App = () => {
  const dispatch = useDispatch()
  const {proId} = useSelector(state => state.cart)
  useEffect(()=>{
    if(localStorage.getItem('cart')){
      const idArray = JSON.parse(localStorage.getItem('cart'))
      idArray.map((item)=>{
        dispatch(addToCart(item))
      })
    }
    else{
      localStorage.setItem('cart',JSON.stringify(proId))
    }
  },[])

  return (
    <Router>
      <div>
        <ErrorBoundry>
          <NavbarHeader />
        </ErrorBoundry>
        <ErrorBoundry>
          <Switch>
            <Route path="/" component={ProductList} exact />
            <Route path="/products/:id"  component={SinglePageProduct} exact/>
            <Route path="/cart"  component={Cart}  exact/>
            <Route path="/user"  component={UserForm}  exact/>
          </Switch>
        </ErrorBoundry>
      </div>
    </Router>
  );
};

export default App;
