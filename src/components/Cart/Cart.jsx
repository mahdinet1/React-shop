import axios from 'axios'
import React,{useEffect} from 'react'
import {showProducts,makeEmpty,cleanCart} from '../../redux/action/productAction'
import {Row,Col,Container} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import './cart.css';
import { Button } from 'react-bootstrap'
import { BsFillTrashFill } from "react-icons/bs";
import Product from '../products/product/Product'
const Cart = (props) => {
    const productsId = useSelector(state => state.cart.proId)
    
    const dispatch = useDispatch()
    const getProducts=()=>{   
       productsId.map((id,index)=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response)=>{
          dispatch(showProducts(response.data))
        }).catch((error)=>{alert(error)})
       })
       
    }
    const deleteCartItemHandler=(i)=>{
        let idd = [...productsId]
        const index = idd.findIndex((element)=>i === element)
         idd.splice(index,1)
        dispatch(cleanCart(idd))
        const cart =JSON.parse(localStorage.getItem('cart'))
        cart.splice(index,1)
        localStorage.setItem('cart',JSON.stringify(cart))
       
        
    }
    const continueHandler =()=>{
        props.history.push('/user')
    }
    useEffect(()=>{

        getProducts()

        return()=>{
            dispatch(makeEmpty())
        }
    },[productsId])
    const products = useSelector(state =>state.cart.products)
    return (
        <div>
            <Container>
                <Row className="pt-3 d-flex justify-content-center" >
                   {products.map((product,index)=>{
                       return(
                       <Col xs={12} className="cart-shop-item p-3 d-flex align-items-center" key={index}>
                           <div>
                               <img src={product.image} className="img-fluid"/>
                           </div>
                           <div className="w-25">
                               <span className="text-primary m-2">title:</span>
                               {product.title}
                           </div>
                           <span  className="text-primary w-25 text-center">
                               price:
                               ${product.price}
                           </span>
                           
                           
                           <Button onClick={()=>{deleteCartItemHandler(product.id)}}><BsFillTrashFill /></Button>

                       </Col>
                       )
                   })}
                   <Button className="w-25" onClick={continueHandler}>ادامه خرید</Button>
                </Row>
            </Container>
        </div>
    )
}

export default Cart
