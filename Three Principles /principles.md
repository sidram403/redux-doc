# Three Principle’s of Redux

## 1. First Principle
### The state of your application is stored in an object within a single state.
Maintain application state in a single object which would be managed by the Redux Store.

### Example :
Let's assume we are tracking the number of cakes on the shelf
```
 {
	   NumberOfCakes:10
 }
```

## 2. Second Principle 
### The only way to change the state is to emit an action, an object describes what happened.
To update the state of your application, you need to let Redux know about that with an action. Not allowed to directly update the state object.

### Example : 
You are not allowed to take cake from the cake shop shelf, instead of that let the shopkeeper know about our action to BUY CAKE
```{
type:BUY_CAKE
}
```

## 3. Third Principle 
### To specify how the state tree is transformed by actions, you write pure reducers.
Reducer - (prevState, action) => newState

### Example :
Shopkeeper is the reducer here
```
const reducer = (state,action) => {
	switch(ation.type){
           case BUY_CAKE : return {
           numOfCakes : state.numOfCakes - 1
           }
	}
}
```
