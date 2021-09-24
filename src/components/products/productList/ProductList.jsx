import React,{useEffect} from 'react'
import Product from '../product/Product'
import axios from 'axios';
import { allProductReq, allProductSuccess, allProductFailure } from '../../../redux/action/productAction'
import {useSelector,useDispatch} from 'react-redux'
import Loader from '../../loading/Loader';


const ProductList = () => {
    const dispatch = useDispatch()
    const {products,loading} = useSelector(state => state.products)
    
    
    useEffect(()=>{
        dispatch(allProductReq());
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                dispatch(allProductSuccess(response.data))
            })
            .catch((error)=>{dispatch(allProductFailure(error))})
        
    },[])
    
    return (
        <div className="d-flex flex-wrap align-items-stretch align-content-center justify-content-center pt-3 ">
            {loading ===true ? <Loader /> : 
            products.map((product, index) => {
                return (
                    <Product key={index} product={product} />
                )
            })}
        </div>
    )
}

export default ProductList
