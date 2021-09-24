import {applyMiddleware, combineReducers,createStore} from 'redux'
import thunk from 'redux-thunk'
import {productReducer,cartReducer,singleProductReducer} from './reducer/productReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const thunkMiddleware = [thunk]
const reducer = combineReducers({
products:productReducer,
cart:cartReducer,
singleProduct:singleProductReducer,
})
const store = createStore(reducer,composeWithDevTools(applyMiddleware(...thunkMiddleware)));


export default store