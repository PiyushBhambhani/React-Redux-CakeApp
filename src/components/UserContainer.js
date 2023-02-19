//Async Actions concept React Redux:
// Let's learn about react and redux. 
//Very similar as redux , just we have react also.

// Let's have a recap of Async Action concepts, we have learned and see what we'll be building

// We have 2 types of action:
// 	1. Synchronus: As soon as action is dispatched, state is immediately updated.
// 	2. Asyncronus: slightly different we wait for a task to complete before dispatching an action.
// 	Typical usecase: Async API calls to fetch data from an endpoint and use that data in our application.
// Before coding, let's see what our app does
	
// Our app simply fetches the list of users from API endpoint and stores in redux store.

// And renders in browser.
// Let's see how our state will look like, what will be the different actions and how reducer would work

// State:
// Typically with data fetching we usually go for 3 properties:

// Loading: true/false  HELPS Display a loading spinner in the component.
// Data: [] /[users]: list of users/ initailly without call it's empty
// Error: errormsg   Used to display error msg to user.


// Actions:
// Api_Call   FETCH_USERS_REQUEST -> FETCH list of users
// Api_Success: FETCH_USERS_SUCCESS -> FETCHED sucessfully.
// Api_Failure: Error fetching the data

// So 3 actions.

// Then our reducers will be.

// Reducers:

// Case FETCH_USERS_REQUEST :
//     Loading : true,
//     Data;[],
//     Error:''
// Case  FETCH_USERS_SUCCESS:
//     Loading: false,
//     Data: response.data[] (from API)
// Case  FETCH_USERS_FAILURE:
//     Loading false,
//     Error:  response.error.message (from API)
    
// So let's code, START FROM CREATING A UserComponent.js file :)
// where we render the list of users

function UserComponent(){
    // SO We create  new folder in src/redux i.e user
    //it will have 3 files  actions, reducers, actiontypes
    // let start with creating actionTypes.js

    const CallAPI=()=>{

    }
    return(<div>
        Users
        <button onClick={CallAPI}> call API</button>
    </div>);
}

export default UserComponent;