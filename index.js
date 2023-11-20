const {createStore} = require("redux")

// ACTINS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECCREMENT";

const initalStateCount = {
  count: 0,
};

// STATE

// ACTION TYPE
const incrementCounter = () => {
  return { type: INCREMENT };
};
const deccrementCounter = () => {
  return { type: DECREMENT };
};

// REDUCER FUNCTION
const couterReducer = (state = initalStateCount, action) => {
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

    default:
      state;
  }
};


// STORE 
const store = createStore(couterReducer)


store.subscribe(()=> {
    console.log(store.getState());
})


store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(deccrementCounter())