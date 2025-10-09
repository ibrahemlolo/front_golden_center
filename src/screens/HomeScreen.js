import React, {useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
// import products from '../product_list'
import Product from '../components/Product'
import axios from 'axios'

function HomeScreen() {

     const [products, setProducts] = useState([])

     useEffect(() => { 
          // fetch products from backend
          async function fetchProducts() {
               const { data } = await axios.get('/api/products')
               setProducts(data)
          }
          fetchProducts()
     }, [])


     return (<div>

          <h1>Latest Products</h1>
          <Row>
               {products.map(prod =>
               (
                    <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
                         <Product product={prod} />
                    </Col>
               )
               )}
          </Row>
     </div>
     )
}

export default HomeScreen