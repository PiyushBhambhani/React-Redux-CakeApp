//Display num of cakes or icecream from props recieved from parent component
// so this container can be reused for both cakes n icecreams

import React from "react";
import { Connect } from "react-redux";
function ItemContainer(props){
    return(
        <div>
            <h2>Item - {props.numOfItems}</h2>
        </div>
    )
}

// this takes 2 params now , state and it's own props
// here are the own props are the props this container has , 
//so can use them if want to
// and generally this functions map the state to props

// we will conditionally assign the redux component


const mapStateToProps=(state,ownProps)=>{

const itemState= ownProps.cake 
    ? state.cake.numOfCakes 
    : state.iceCream.numOfIceCreams

    return{
        numOfItems: itemState
    }
}
//this scenario for which we have used for , might be a bit rare in applications
// what is  common usecase though is "master detail pattern"
//from a list of items, when we click on  particular item we would pass item Id as a prop
// then fetch the data only for that ID from redux.
// here we just wanted to explain aout the second parameter, how to use this can be depended on  requirement.



export default connect(mapStateToProps)(ItemContainer);