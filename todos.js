const { default: axios } = require("axios")
const {createStore, applyMiddleware} = require("redux")
const { default: thunk } = require("redux-thunk")

// constent variable
const TODOS_REQUEST = "TODOS_REQUEST"
const TODOS_SUCCESS = "TODOS_SUCCESS"
const TODOS_FAILED = "TODOS_FAILED"
const todoUrl = "https://jsonplaceholder.typicode.com/todos"


const initialState = {
    isLoading:false,
    todos:[],
    error:null
}


// ACTION FUNCTION

const todosRequest = ()=>{
    return {
       type:TODOS_REQUEST,

    }
}
const todosFailed = (error)=>{
    return {
       type:TODOS_FAILED,
       payload:error

    }
}
const todosSuccess = (todos)=>{
    return {
       type:TODOS_SUCCESS,
       payload:todos

    }
}


// create reducers

const todoReducer = (state=initialState,action)=> {
    switch (action.type) {
        case TODOS_REQUEST:
            return {
                ...state,
                isLoading:true
            }
        case TODOS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                todos:action.payload
            }
        case TODOS_FAILED:
            return {
                ...state,
                isLoading:false,
                error:action.payload
            }
            
            
    
        default:
            return state;
    }

}
const fetchData = ()=> {
    return (dispatch)=> {
        dispatch(todosRequest())
        axios.get(todoUrl)
        .then(res=>{
            const todos = res.data
            const title = todos.map(todo=> todo.title)
            dispatch(todosSuccess(title))
        })
        .catch(error=> {
            dispatch(todosFailed(error.message))
        })

    }
}


const store = createStore(todoReducer,applyMiddleware(thunk))

store.subscribe(()=> {
    console.log(store.getState())
})

store.dispatch(fetchData())