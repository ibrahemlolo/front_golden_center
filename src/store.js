
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReduser, productDetailsReduser } from './reducers/productReducers'

const reduser = combineReducers({
     productList: productListReduser,
     productDetails: productDetailsReduser,
})

const initialstate = {}

const middleware = [thunk]


const store = createStore(reduser, initialstate,
     composeWithDevTools(applyMiddleware(...middleware)))

export default store