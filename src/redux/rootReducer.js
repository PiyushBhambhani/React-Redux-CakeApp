import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import { combineReducers } from "redux";
import { usersReducer } from "./user/userReducers";

//let's define root reducer
// we will combine reducer with combineReducers Function
// which takes an object as a arguement , where we specify the reducers
const rootReducer =combineReducers(
    {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: usersReducer 
    }
)

export default rootReducer;

// that's pretty much it for actions reducers,state
// whats left is to use async actions to make a API call, dispatch and show in UI/