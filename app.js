const { createStore } = require("redux");

// action constent

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET"
// inital state
const initialState = {
  count: 0,
};

// action types function
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const deccrementCounter = () => {
  return { type: DECREMENT };
};

const resetCounter= ()=> {
    return {
        type:RESET
    }
}
// REDUCER FUNCTION

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
      case RESET:
        return {
            ...state,
            count:0
        }

    default:
      state;
  }
};

// create store 
const store = createStore(counterReducer)

store.subscribe(()=> {
    console.log(store.getState());
})

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(deccrementCounter())
store.dispatch(resetCounter())
