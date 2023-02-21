import { legacy_createStore , applyMiddleware} from "redux";
import logger from 'redux-logger'
// notice here now we are using the es6 syntax
// now instead of importing cake reducer just import rootreducer
// and attach the reducer to store :)
import rootReducer from "./rootReducer";
import { composeWithDevTools } from '@redux-devtools/extension';

import thunk from "redux-thunk";

const store = legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));
export default store

// now we have created a store
//  the next step is to provide this store to our react application
// and this is where react-redux library makes it's first appreance
//to provide the redux store to a react application 
//react-redux library exports a component called provider