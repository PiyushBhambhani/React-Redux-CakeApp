import { FETCH_USERS_FAILURE,FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";
import axios from 'axios'

// Note synchronus actions would be like this below

const fetchUsersRequest=()=> {

    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess=(users)=>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure =(error)=>{
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}


// // Async actions would 
// //return functions which can perform things
// //like call api n handle sideeffects

// const fetchUsersRequest=()=>{

//     return function(){
//         fetch(endpoint).then((result)=>{

//         })
//         .catch(()=>{

//         })
//     }
// }

// We are going to define a function called fetch users 
//this is an action creator now the three action creators we have defined 
//in the previously all returned an action 
//but the fetch users action creator is special
// by making use of the thunk middleware fetch users 
//will  return another function
// so instead of returning an action we return a function 
//and what is special about this function is that it doesn't have to be pure
// it is allowed to have side effects such as async api calls
// and this function also receives the dispatch method as its argument 
//now let's see how to make an Axios request and dispatch the necessary actions at the top 
//make sure you import Axios


export const fetchUsers =()=>
{
    // this function 
    return (dispatch)=>{

        // before we fire off the api call we dispatch fetchUsersRequest action
        dispatch(fetchUsersRequest)

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( (response)=> {
            const users= response.data
            //when we get sucess we dispatch action fetchUsersSuccess with the list of users

            dispatch(fetchUsersSuccess(users))
        } )
        .error((error)=>{
            const errorMessage= error.message
            //similarrly we dispatch error incase of error
            // this pure functions call s the API and uses the arg 
            //dispatch to call actions at the required steps.

            dispatch(fetchUsersFailure(error))
        })
    }
}

// Now the final step is to subscribe our UserContainer component to
// redux store and display the list of users