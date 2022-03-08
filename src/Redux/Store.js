import { createStore } from "redux";
import reducers from "./Reducers/index1";

// create a store equal to redux store.
// This redux store will take couple of arguements
// 1st is reducers which is a combination of all reducers.
// 2nd is a state which is empty as of now or preloadedState which is optional
// 3rd is REDUX DevTools extension

//For a basic Redux store
const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
