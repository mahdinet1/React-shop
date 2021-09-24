import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Button } from 'react-bootstrap'
import './singleproduct.css'
import { addToCart } from '../../../redux/action/productAction'
import { singleProductReq, singleProductSuccess, singleProductFailure } from '../../../redux/action/productAction'


const SinglePageProduct = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.singleProduct.selectedProduct)
    useEffect(() => {
        dispatch(singleProductReq())
        axios.get(`https://fakestoreapi.com/products/${props.match.params.id}`)
            .then((response) => {
                dispatch(singleProductSuccess(response.data))
            })
            .catch((error) => {
                dispatch(singleProductFailure(error))
            })

    }, [])
    const addTocartHandler = () => {
        dispatch(addToCart(state.id))

    }
    return (
        <Container className="pt-5">
            <Row>
                <Col md={6} xs={12} className="text-center">
                    <img src={state.image} className="img-fluid pro-img" />
                </Col>
                <Col md={6} xs={12} className="d-flex justify-content-center align-items-center">
                    <Row>
                        <Col xs={12} className="text-center m-3 fw-bold fs-3">{state.title}</Col>
                        <Col xs={12} >{state.description}</Col>
                        <Col xs={12} className="text-center m-3 text-primary fs-2">${state.price}</Col>
                        <Col xs={12} className="text-center">
                            <Button className="w-50" onClick={addTocartHandler}>Add To Cart </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SinglePageProduct
