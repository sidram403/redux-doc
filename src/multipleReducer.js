const redux = require('redux');

const createStore = redux.createStore; // store created

const combineReducer = redux.combineReducers; // use to combine two or more reducers


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
// reducer for IceCream
const iceCreamReducer = (state=initialIceCreamState, action) =>{
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default : return state
    }
}
// reducer for Cake
const cakeReducer = (state=initialCakeState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default : return state
    }
}

// combaining two reducer into one rootreducer
const rootReducers = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducers);
console.log('Inital State', store.getState());
const unsubscribe = store.subscribe(() => console.log('Update state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
 
