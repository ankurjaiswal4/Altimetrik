import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers";

function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk, logger));
}

const store = configureStore();

export default store;
