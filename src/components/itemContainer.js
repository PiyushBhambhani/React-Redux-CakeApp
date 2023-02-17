//Display num of cakes or icecream from props recieved from parent component
// so this container can be reused for both cakes n icecreams

import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";
function ItemContainer(props){
    return(
        <div>
            <h2>Item - {props.numOfItems}</h2>
            <button onClick={props.buyItems} > Buy Item</button>
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
    : state.iceCream.numOfIceCream

    return{
        numOfItems: itemState
    }
}
//this scenario for which we have used for , might be a bit rare in applications
// what is  common usecase though is "master detail pattern"
//from a list of items, when we click on  particular item we would pass item Id as a prop
// then fetch the data only for that ID from redux.
// here we just wanted to explain aout the second parameter, how to use this can be depended on  requirement.


//similarly we can do the dispatch based on owncomponent Props 
const mapDispatchToProps=(dispatch,ownProps)=>{
    const dispatchFunction= ownProps.cake
    ? ()=>{ dispatch(buyCake())}
    : ()=>{ dispatch(buyIceCream())}

    return{
        buyItems: dispatchFunction
    }
}
//Note : Both above functions "returns" an object
//Note: in some cases, we only need to
//connect the dispatch in components not any state to show
// there we call connect with null as first arguement.
//as below example
// export default connect(null, mapDispatchToProps)(ItemContainer)

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);