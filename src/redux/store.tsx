import { combineReducers, createStore, applyMiddleware } from "redux";
import tasksReducer from "./reducers/tasks_reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  menu: tasksReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// window.store = store;

export default store;
