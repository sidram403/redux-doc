# Let's start explore more

## Setup redux using following commond : 
```
npm install redux
```

## 1. Create the Store using below code
```
const redux = require('redux');

const createStore = redux.createStore;

const reducer =() =>{
  // reducer function content - for more visit reducer.js file
}

const store = createStore(reducer);
```

## 2. Create an action to change the state 
```
const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
    return {
        type: BUY_CAKE,
        info:"First redux action"
    }
}
```

## 3. Reducer to transition state depending on the action
```
const redux = require('redux');

const createStore = redux.createStore; // store created

const BUY_CAKE = 'BUY_CAKE';

const BUY_ICECREAM = 'BUE_ICECREAM';

// action 
function buyCake() {
    return {
        type: BUY_CAKE,
        info:"First redux action"
    }
}

function buyIcecream(){
    return {
        type: BUY_ICECREAM,
    }
}

// (previeousState, action) => newState

const initalState ={
    numOfCakes: 10,
    numOfIcecreams: 20
}

// reducer
const reducer = (state=initalState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }
        default : return state
    }
}

const store = createStore(reducer);
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(()=> console.log('Updated State', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe();
```

## 4. Additional, multiple reducer
```
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
 
```
