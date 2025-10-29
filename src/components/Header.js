import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap' 
import { LinkContainer } from 'react-router-bootstrap'
import { USER_LOGOUT } from '../constants/userConstants'
import { logout } from '../actions/userAction'



function Header() {

     const userLogin = useSelector(state => state.userLogin)
     const dispatch = useDispatch()
     const { userInfo } = userLogin
     

     const logoutHandler= ()=> {
          dispatch(logout())
     }
  return (
     <header>
            <Navbar bg='dark' variant='dark' expand="lg" collapseOnSelect>
                 <Container>
                      <LinkContainer to="/">
                      <Navbar.Brand >GoldenCenter</Navbar.Brand>
                      </LinkContainer>
                      
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                           <Nav className="me-auto">
                                <LinkContainer to="/Cart">
                                     <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                                </LinkContainer>

                                {userInfo ? (

                                     <NavDropdown title={userInfo.name} id="username">
                                          <LinkContainer to="/profile" >
                                               <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                          </LinkContainer>

                                          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                     </NavDropdown>
                              ):(


                                <LinkContainer to="/Login">
                                     <Nav.Link ><i className='fas fa-user'></i>Login</Nav.Link>
                                     </LinkContainer>
                                )}
                                
                           </Nav>
                      </Navbar.Collapse>
                 </Container>
            </Navbar>
     </header>
   
  )
}

export default Header