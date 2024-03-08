const redux = require('redux');
const reduxLogger  = require('redux-logger');

const createStore = redux.createStore;

const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const initialCakeState ={
    numOfCakes : 10
}

const initialIceCreamState ={
    numOfIceCreams : 20
}

function buyCake(){
    return {
        type: BUY_CAKE
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM
    }
}

const iceCreamReducer = (state=initialIceCreamState, action) =>{
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default : return state
    }
}

const cakeReducer = (state=initialCakeState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default : return state
    }
}

const rootReducers = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducers, applyMiddleware(logger));
console.log('Inital State', store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
 
