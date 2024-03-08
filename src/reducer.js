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
