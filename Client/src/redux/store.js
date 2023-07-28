// import { createStore } from "redux";

// const store=createStore();

// export default store;


// import { createStore } from 'redux';
// import reducer from './reducer';
// import thunk from "redux-thunk";

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;


// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import reducer from "../redux/reducer";

// const store = createStore(reducer, applyMiddleware(thunk));

// export default store;

import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;