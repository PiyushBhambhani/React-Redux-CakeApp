import { FETCH_USERS_FAILURE,FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";


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

// now let's define reducers and initialstate