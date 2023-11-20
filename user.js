const { createStore } = require("redux");

const addUser = "addUser";

const initialState = {
  user: ["rahim"],
  count: 0,
};

const add_User = (user) => {
  return {
    type: addUser,
    payload: user,
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case addUser:
      return {
        user: [...state.user, action.payload],
      };

    default:
      state;
  }
};


const store = createStore(userReducer)
store.subscribe(()=> {
    console.log(store.getState());
})

store.dispatch(add_User("karom"))
store.dispatch(add_User("rafique"))