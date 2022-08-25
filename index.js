const CAKE_ORDERED="CAKE_ORDERED"
const CAKE_RESTOCKED="CAKE_RESTOCKED"
const ICE_CREAM_ORDERED="ICE_CREAM_ORDERED"
const ICE_CREAM_RESTOCKED="ICE_CREAM_RESTOCKED"
const redux=require("redux")
const createStore=redux.legacy_createStore
const bindActionCreater=redux.bindActionCreators
const combineReducers=redux.combineReducers
const applymiddleware=redux.applyMiddleware;



const reduxlogger=require("redux-logger");
const logger= reduxlogger.createLogger()

// event or action creaters
function orderCake(){
    return {
        type:CAKE_ORDERED,
        payload:1
}
}

const CAKE_initialState={
    numCakes:4,
    teststate:2
}

function RestockCake(qty=1){
    return {
        type:CAKE_RESTOCKED,
        payload:qty
    }
}



function orderIceCream(){
    return {
        type:ICE_CREAM_ORDERED,
        payload:1
}
}

const ICE_CREAM_initialState={
    num_ICE_CREAM:2,
    teststate:2
}

function RestockIceCream(qty=1){
    return {
        type:ICE_CREAM_RESTOCKED,
        payload:qty
    }
}


// Event Handler 
const CAKE_reducer =(state=CAKE_initialState, action)=> {
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
const ICE_CREAM_reducer =(state=ICE_CREAM_initialState, action)=> {
    switch(action.type){
     case ICE_CREAM_ORDERED:
        return {
            ...state,
            num_ICE_CREAM:state.num_ICE_CREAM + 1
            
        }
    case ICE_CREAM_RESTOCKED: 
        return{
                ...state,
                num_ICE_CREAM:state.num_ICE_CREAM + action.payload
    }
        default:
            return state
    }
}
const rootreducer=redux.combineReducers({
    ICE_CREAM:ICE_CREAM_reducer,
    CAKE:CAKE_reducer
})




const store= createStore(rootreducer, applymiddleware(logger))

console.log("initial State", store.getState())


// any time the store updates we log teh
const unsubscribe=store.subscribe(()=>{
    console.log("updated state", store.getState())
})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(RestockCake(3))

const actions= bindActionCreater({orderCake , RestockCake,orderIceCream,RestockIceCream },store.dispatch)

actions.orderCake();
actions.orderCake();
actions.orderCake();
// actions.RestockCake(3);
// actions.orderIceCream();
// actions.RestockIceCream(10)


unsubscribe()

// actions.orderIceCream();
