const { createStore } = require("redux");

// action constent

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT_BY_VALUE = "DECREMENT_BY_VALUE";

const RESET = "RESET";
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
const incrementByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};
const decrementByValue = (value) => {
  return {
    type: DECREMENT_BY_VALUE,
    payload: value,
  };
};

const resetCounter = () => {
  return {
    type: RESET,
  };
};
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
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count - action.payload,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      state;
  }
};

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());

store.dispatch(incrementByValue(10))
store.dispatch(incrementByValue(6))
store.dispatch(decrementByValue(5))
