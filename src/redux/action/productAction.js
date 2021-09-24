import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAILURE,
  ADD_TO_CART,
  SINGLE_PRODUCT_REQ,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAILURE,
  SHOW_PRODUCTS,
  MAKE_EMPTY_PRODUCTS,
  CLEAN_CART,
} from "../type";

export const allProductReq = () => {
  return {
    type: ALL_PRODUCT_REQUEST,
  };
};
export const allProductSuccess = (products) => {
  return {
    type: ALL_PRODUCT_SUCCESS,
    payload: products,
  };
};
export const allProductFailure = (error) => {
  return {
    type: ALL_PRODUCT_FAILURE,
    error: error,
  };
};
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id: id,
  };
};
export const  cleanCart = (id)=>{
  return{
    type:CLEAN_CART,
    id:id,
    
  }
}
export const singleProductReq = () => {
  return {
    type: SINGLE_PRODUCT_REQ,
  };
};
export const singleProductSuccess = (product) => {
  return {
    type: SINGLE_PRODUCT_SUCCESS,
    payload: product,
  };
};
export const singleProductFailure = (error) => {
  return {
    type: SINGLE_PRODUCT_FAILURE,
    error,
  };
};
export const showProducts = (product) => {
  return {
    type: SHOW_PRODUCTS,
    payload: product,
  };
};
export const makeEmpty = () => {
  return {
    type: MAKE_EMPTY_PRODUCTS,
  };
};
