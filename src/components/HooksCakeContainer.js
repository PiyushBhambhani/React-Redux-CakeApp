////so we can connect our components to redux store with some hooks instead of connect
// we can use useSelector hook of React-redux to use the states in component (instead of mapstatetoprops directly)

 //const numOfCakes=useSelector((state)=> state.numOfCakes)
// useselector takes state as argument and returns whatever we want basically.

// Now, what we are missing is just Buttonclick handler, can say when btn clicks we need to dispatch an action which performs task which changes the state n all
// Pretty simple
// first we are going to import use dispatch from react redux next in the component we call this hook the use dispatch hook returns a reference to the dispatch function from the Redux store let's save that reference in a variable called dispatch this variable can now be used to Dispatch actions as needed for our button let's now add a click handler on click and arrow function dispatch by cake make sure to import the action creator at the top and that is all there is to it if you now say the file go back to the browser click on the button the count should still decrement so our hooks cake container works as expected now I understand if you feel using hooks is very simpler than using the connect Function but there are a few usage warnings when using react redux with hooks but it all depends on the nesting of components in your application and how you write your selector functions 

// Doc: default recommendation is R-R Hooks and some warnings https://react-redux.js.org/introduction/why-use-react-redux 

import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer(){
    const numOfCakes=useSelector((state)=> state.cake.numOfCakes)
    const dispatch=useDispatch();
    return (
        <div>
            <h2>Num of cakes: {numOfCakes} </h2>
            <button onClick={()=>{dispatch(buyCake())}}>Buy Cake</button>
        </div>
    )
}
// 
export default HooksCakeContainer;