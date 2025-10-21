import {useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'



function ProductScreen({ match }) {
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails



  // support both react-router v5 (match) and v6 (useParams)
  const paramsFromHook = useParams()
  const params = match ? match.params : paramsFromHook
  // const products = products.find((p) => p._id === params.id)



  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [dispatch, params.id])



  
  return (
    <div>
      <Link className='btn btn-light my-3 border-secondary' to='/'>Go Back</Link>
      
      {loading ?
        <Loader />
        : error ?
          <Message variant='danger'>{error}</Message>
          :
      
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
        
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                  Price: ${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <Card >
                <ListGroup variant='flush'>

                  <ListGroup.Item className='border-secondary'>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
            
                  <ListGroup.Item className='border-secondary'>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>}
    </div>
  )
}

export default ProductScreen