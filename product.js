const {createStore, combineReducers} = require("redux")

const ADD_PRODUCT = "ADD_PRODUCT"

const initalProductState = {
    product:["laptop","computer"],
    count:2
}
const add_TO_CART = "add_TO_CART"

const initalCarttState = {
    cart:["alu","potol"],
    count:2
}

const addProduct = (product)=> {
    return {
        type:ADD_PRODUCT,
        payload:product
    }
}
const addToCart = (cart)=> {
    return {
        type:add_TO_CART,
        payload:cart
    }
}

const productReducer = (state=initalProductState,action)=> {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                
                product:[...state.product,action.payload],
                count:state.count +1
            }
            
            
    
        default:
            return state;
    }
}
const cartReducer = (state=initalCarttState,action)=> {
    switch (action.type) {
        case add_TO_CART:
            return {
                
                product:[...state.cart,action.payload],
                count:state.count +1
            }
            
            
    
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    product:productReducer,
    cart:cartReducer
})



const store = createStore(rootReducer)

store.subscribe(()=> {
    console.log(store.getState());
})

store.dispatch(addProduct("shows"))
store.dispatch(addToCart("begon"))