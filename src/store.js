
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReduser, productDetailsReduser } from './reducers/productReducers'
import { cartReduser } from './reducers/cartReducers'

const reduser = combineReducers({
     productList: productListReduser,
     productDetails: productDetailsReduser,
     cart: cartReduser,

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
     JSON.parse(localStorage.getItem('cartItems')) : []


const initialstate = {
     cart: { cartItems: cartItemsFromStorage },
}

const middleware = [thunk]


const store = createStore(reduser, initialstate,
     composeWithDevTools(applyMiddleware(...middleware)))

export default store