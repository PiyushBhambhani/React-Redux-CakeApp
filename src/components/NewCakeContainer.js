//Before we start adding the async action in react
// Let's discuss few minor details
// i.e how to add a payload to the action creator

// Let's change the code for a more functionality based approach.

// Like let's add a input  box where user can enter the numberof cakes to buy.

// And we have a button which gives that much amount of cakes the user want for that
// Let's create/change a component 
//NewCakeContainer :) 
import React from "react"
import { connect } from "react-redux"
import { buyCake } from "../redux"

import { useState } from "react"
function NewCakeContainer(props){
    
    const [num,setNum]= useState(1)
    return (
        <div>
            <h2> num of cake : {props.numOfCakes}</h2>
            <input type="text" onChange={e =>{
                setNum(e.target.value)
            }} value={num}></input>
            <button onClick={()=>{props.buyCake(num)}}>Buy {num} cake</button>
        </div>
    )
}

function mapStateToProps(state){
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

function mapDispatchToProps(dispatch){
    return {
        buyCake: (num)=>{
            return dispatch(buyCake(num))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (NewCakeContainer)