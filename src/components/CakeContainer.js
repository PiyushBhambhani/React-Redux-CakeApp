// how do we get hold of the redux state and how do we dispatch an action from within a react component ?
// in all components we have already passed the store as a prop of provider
//  in App.js from react-redux
//in components where we want to use the state property or dispatch an action
//, we will import connect from react redux and 
// write functions mapStateToProps which takes state as arg and returns object with key for states
// and write function mapDispatchToProps which takes dispatch as arg and returns object with key mapping to actioncreator dispatched.
// finally we use the connect for both the functions and do export default with our component
import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props){
    return (
        <div>
            <h2> Number of cakes: {props.numOfCakes}</h2>
            <button onClick={props.buyCake}> Buy Cake </button>
        </div>
    )
}

//we gonna acheive this in 3 steps

//1st step define a new function
//i.e mapStateToprops this name is convention to good to sticking same 
//but can be changed like any other
// takes state and returns object
const mapStateToProps= state =>{
    return {
        numOfCakes: state.numOfCakes
    }
}

//confused, hang on over a min

// one thing I would like to point out here is about selectors
// if you take a look at the official react Redux documentation
// they maintain a Separate file called selectors
// so just like actions and reducers there would be selectors
// what it does is basically return some state information from the redux state 
// in our example selecting number of cakes is pretty straightforward State.numofcakes
// however in larger applications you might perform some data transformation
//  and then select only what is required so instead of writing a couple of lines of
// Code in the maps data props function 
// it is extracted into a separate file called selectors 
// now I am NOT going to do that because our example is really simple and straightforward 
// I just wanted to make you aware of a term called selectors so that you know what the documentation 
// is referring to all right let's move on to step number two


// step number two

// this again involves defining a new function
// this time function is called mapDispatchToProps
// takes dispatch and returns an object
// here we have only one actioncreator

const mapDispatchToProps = dispatch =>{
    return {
        buyCake : ()=>{
            return dispatch(buyCake())
        }
    }
}

// that is step 2 , defining mapDispatchToProps

// step number three we are going to connect
//  these two functions with our react component
//  and for that we use the connect function or 
//  the connect higher-order component from the react Redux library
//  so at the top import connect from react Redux
//  and at the bottom while exporting our component 
//  we connect the two functions export default 
//  connect map state the props map dispatched to props 
//  with the cake container what this connect function does
//   is basically what the two function names specify
//   in the first function the state from the redux store is mapped 
// to our component props so apart from whatever Props cake container was receiving
//  it will now receive an additional prop called number of cakes which 
//  reflects the number of cakes in the redox store
//   it's a number of cakes props props dot number of cakes 
//   similarly map dispatched props will basically 
//   map our dispatch of an action creator to a prop in our component
//    so our component now receives a second additional prop 
//    called buy cake which will basically dispatch the buy cake

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    ) (CakeContainer)

// what this does is what this names specify
//the connect function connects a react component to the redux store in our case it connects cake
// Container to the redux store 
////this is the most basic pattern you can have of react and  redux