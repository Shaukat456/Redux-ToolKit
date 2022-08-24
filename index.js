const CAKE_ORDERED="CAKE_ORDERED"
const CAKE_RESTOCKED="CAKE_RESTOCKED"
const redux=require("redux")
const createStore=redux.legacy_createStore()


// event or action creaters
function orderCake(){
    return {
        type:CAKE_ORDERED,
        payload:1
}
}

const initialState={
    numCakes:4,
    s:2
}

function RestockCake(qty=1){
    return {
        type:CAKE_RESTOCKED,
        payload:qty
    }
}


// Event Handler 
const reducer =(state=initialState, action)=> {
    switch(action.type){
     case CAKE_ORDERED:
        return {
            ...state,
            numCakes:state.numCakes - 1 ,
            
        }
    case CAKE_RESTOCKED: 
        return{
                ...state,
                numCakes:state.numCakes + action.payload
    }
        default:
            return state
    }
}
// const rootreducer=redux.combineReducers(reducer)

const store= createStore(reducer)

console.log("initial State", store.getState())


// any time the store updates we log teh
const unsubscribe=store.subscribe(()=>{
    console.log("updated state", store.getState())
})

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(RestockCake(10))

unsubscribe()