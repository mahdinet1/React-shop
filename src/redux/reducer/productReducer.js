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
const initialState = {
  products: [],
  loading: false,
  error: null,
  selectedProduct: {},
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
      break;
    case ALL_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      break;
    default:
      return state;
      break;
  }
};

const initialCart = {
  cartCount: 0,
  proId: [],
  products: [],
};

export const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartCount: state.cartCount + 1,
        proId: [...state.proId, action.id],
      };

      break;
    case SHOW_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
      break;
    case MAKE_EMPTY_PRODUCTS:
      return {
        ...state,
        products: [],
      };
      break;
    case CLEAN_CART:
      return {
        cartCount: state.cartCount - 1,
        proId: action.id,
        products:[],
      };
      break;
    default:
      return state;
      break;
  }
};
export const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_PRODUCT_REQ:
      return {
        ...state,
        loading: true,
      };
      break;
    case SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedProduct: action.payload,
      };
      break;
    case SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      break;

    default:
      return state;
      break;
  }
};
