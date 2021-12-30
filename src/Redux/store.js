import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authreducer from "./Reducers/AuthReducer";
import CartReducer from "./Reducers/CartReducer";
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  authState: authreducer,
  CartState: CartReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;