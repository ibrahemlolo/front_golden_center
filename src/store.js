
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReduser, productDetailsReduser } from './reducers/productReducers'
import { cartReduser } from './reducers/cartReducers'
import { userLoginReduser, userRegisterReduser, userDetailsReduser, userUpdateProfileReduser  } from './reducers/userReducers'
import { use } from 'react'

const reduser = combineReducers({
     productList: productListReduser,
     productDetails: productDetailsReduser,
     cart: cartReduser,
     userLogin: userLoginReduser,
     userRegister: userRegisterReduser,
     userDetails: userDetailsReduser,
     userUpdateProfile: userUpdateProfileReduser,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
     JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
     JSON.parse(localStorage.getItem('userInfo')) : null
const shippingAddressFromStorage = localStorage.getItem('shippingAdrees') ?
     JSON.parse(localStorage.getItem('shippingAdrees')) : {}


const initialstate = {
     cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage },
     userLogin: { userInfo: userInfoFromStorage },

}

const middleware = [thunk]


const store = createStore(reduser, initialstate,
     composeWithDevTools(applyMiddleware(...middleware)))

export default store