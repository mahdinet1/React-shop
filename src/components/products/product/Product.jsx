import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './product.css'
import { BiCart } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/action/productAction'
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
    const dispatch = useDispatch()
    const {proId} = useSelector(state => state.cart)
 
    const addTocartHandler = () => {
        dispatch(addToCart(product.id))
        let idArray = JSON.parse(localStorage.getItem('cart'))
        idArray =[...idArray,product.id]
        const newArray = JSON.stringify(idArray)
        localStorage.setItem('cart',newArray)   


    }
    return (
        <div className="pro-card d-flex align-content-center justify-content-center justify-items-center">
            <Card style={{ width: '17rem' }} className="p-1">

                <Link to={`/products/${product.id}`}>
                    <Card.Img variant="top" src={product.image} className="img-fluid rounded  " />
                </Link>

                <Card.Body style={{ height: '7%' }}>
                    <Card.Title>{product.title}</Card.Title>
                    
                    <Card.Text >
                        <div>
                            {product.body}
                            
                        </div>
                        <div>${product.price}</div>
                    </Card.Text>
                </Card.Body>
                <Button variant="secondary" style={{ width: '18%' }} className="align-self-end " onClick={addTocartHandler}>
                    <BiCart style={{ fontSize: '1.3rem' }} />
                </Button>
            </Card>
        </div>
    )
}

export default Product
