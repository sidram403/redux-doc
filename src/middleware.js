const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// state
const initialState ={
    loading: false,
    users:[],
    error:''
}

// action
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// action creation

const fetchUsersRequest =() =>  {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) =>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (errors) =>{
    return{
        type : FETCH_USERS_FAILURE,
        payload : errors
    }
}

// reducers

const reducer = (state = initialState, action  ) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST : return {
            ...state,
            loading : true

        }
        case FETCH_USERS_SUCCESS : return {
            ...state,
            loading: false,
            users: action.payload,
            error : ''
        }
        case FETCH_USERS_FAILURE : return {
            ...state,
            loading: false,
            users:[],
            error: action.payload
        }
        default : return state
    }
}

const fetchUsers = () =>{
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            // response.data is the array of users
            const users = response.data.map(user => user.id);
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            // error.message isthe error description
            const errorMessage = error.message;
            dispatch(fetchUsersFailure(errorMessage))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers)
