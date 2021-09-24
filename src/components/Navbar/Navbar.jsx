import React from 'react'
import { Container, Nav, NavDropdown, Navbar, Badge } from 'react-bootstrap'
import { BiCart } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
const NavbarHeader = () => {
    const { cartCount } = useSelector(state => state.cart)
    return (
        <div className="mb-5">
            <Navbar bg="secondary" variant="dark" expand="md" fixed="top" >
                <Container className="d-flex">
                    <LinkContainer to="/">
                        <Navbar.Brand>React-Shop</Navbar.Brand>
                    </LinkContainer>
                    <span style={{ position: 'relative' }}>
                        <BiCart style={{ fontSize: '1.3rem' }} />
                        <Badge bg="danger" pill style={{ position: 'absolute', right: '-34%', top: '-31%', fontSize: '0.6rem' }}>{cartCount}
                        </Badge>
                    </span>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto align-self-end" style={{ direction: 'rtl' }}>
                            <LinkContainer to="/">
                                <Nav.Link >صفحه اصلی</Nav.Link>
                            </LinkContainer >
                            <LinkContainer to="/cart">
                                <Nav.Link ><span>سبدخرید</span></Nav.Link>
                            </LinkContainer>
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarHeader
