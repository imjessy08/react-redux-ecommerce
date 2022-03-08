// When we create an application, we will have number of reducers. We will combine all those reducers inside this page.
import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productReducer";

// then write a constant of all reducers.
// The combineReducers will take an object where we will define a key of all products.
export const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});

export default reducers;
