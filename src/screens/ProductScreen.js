import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
// import products from '../product_list'
import axios from 'axios'

function ProductScreen({ match }) {

  // support both react-router v5 (match) and v6 (useParams)
  const paramsFromHook = useParams()
  const params = match ? match.params : paramsFromHook
  // const products = products.find((p) => p._id === params.id)



  const [products, setProducts] = useState([])

  useEffect(() => {
    // fetch products from backend
    async function fetchProducts() {
      const { data } = await axios.get(`/api/products/${params.id}`)
      setProducts(data)
    }
    fetchProducts()
  }, [])








  
  return (
    <div>
      <Link className='btn btn-light my-3' to='/'>Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={products.image} alt={products.name} fluid/>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{products.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={products.rating} text={`${products.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${products.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {products.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card >
            <ListGroup  variant='flush'>

              <ListGroup.Item className='border-secondary'>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${products.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            
              <ListGroup.Item className='border-secondary'>
            <Row>
              <Col>Status:</Col>
              <Col>
                {products.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
              </Col>
              </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={products.countInStock === 0}>
                  Add To Cart
                </Button>
              </ListGroup.Item>
              </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen