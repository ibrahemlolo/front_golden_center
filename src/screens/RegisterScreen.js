import React from 'react'
import { useEffect, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useLocation, useNavigate } from 'react-router-dom'
import FormContainer  from '../components/FormContainer'
import Message from '../components/Message'
import Loader from '../components/Loader'

import { register } from '../actions/userAction'


function RegisterScreen({location, history}) {
     location = useLocation();
     history = useNavigate();

     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [confirmPassword, setConfirmPassword] = useState('')
     const [message, setMessage] = useState('')

     const dispatch = useDispatch()

     const redirect = location.search ? location.search.split('=')[1] : '/';
     console.log(redirect)


     const userRegister = useSelector(state => state.userRegister)
     const { loading, error, userInfo } = userRegister



     useEffect(() => {
          if (userInfo) {
               history(redirect)
          }
     }, [history, redirect, userInfo])

     const submitHandler = (e) => {
          e.preventDefault()

          if (password !== confirmPassword) {
               setMessage('Passwords do not match')
          } else {
               dispatch(register(name, email, password))
          }
        
     }




  return (
       <FormContainer>
            <h1>Register</h1>
            {message && <Message variant='danger' >{message}</Message>}
            {error && <Message variant='danger' >{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                 <Form.Group controlId='name'>
                      <Form.Label>Enter Name</Form.Label>
                      <Form.Control
                           required

                           placeholder='Enter name'
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                      ></Form.Control>
                 </Form.Group>

                 <Form.Group controlId='email'>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                           // type='email'
                           required
                           placeholder='Enter email'
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                      ></Form.Control>
                 </Form.Group>

                 <Form.Group controlId='password'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                           required
                           type='password'
                           placeholder='Enter password'
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                      ></Form.Control>
                 </Form.Group>
                 <Form.Group controlId='confirmPassword'>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                           required
                           type='password'
                           placeholder='Confirm password'
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}
                      ></Form.Control>
                 </Form.Group>
                 <Button
                      type='submit' variant='primary' className='my-3'>
                      Register
                 </Button>
            </Form>
            <Row className='py-3'>
                 <Col>
                      Have an Account?{' '}
                      <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                           Login
                      </Link>
                 </Col>
            </Row>
            
    </FormContainer>
  )
}

export default RegisterScreen