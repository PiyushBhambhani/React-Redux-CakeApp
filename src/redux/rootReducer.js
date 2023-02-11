import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import { combineReducers } from "redux";

//let's define root reducer
// we will combine reducer with combineReducers Function
// which takes an object as a arguement , where we specify the reducers
const rootReducer =combineReducers(
    {
        cake: cakeReducer,
        iceCream: iceCreamReducer
    }
)

export default rootReducer;