import { legacy_createStore } from "redux";
// notice here now we are using the es6 syntax
import cakeReducer from "./cake/cakeReducer";


const store = legacy_createStore(cakeReducer);

export default store

// now we have created a store
//  the next step is to provide this store to our react application
// and this is where react-redux library makes it's first appreance
//to provide the redux store to a react application 
//react-redux library exports a component called provider