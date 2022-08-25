const redux=require("redux")
const createStore=redux.legacy_createStore
const bindActionCreater=redux.bindActionCreators
const combineReducers=redux.combineReducers




const intialState={
    name:"shaukat",
    info:{
        age:3,
        class:14,
        uni:"uit"
    }
}

//action
const infoUpdated= "INFO_UPDATED";

// action creator
const updateInfo=(info)=>{
        return {
            type:infoUpdated,
            payload:info
        }

    }


const Update_INFO_REDUCER=(state=intialState , action)=>{
    switch(action.type){
        case infoUpdated:
            return {
                ...state,
                ...state.info,
                uni: action.payload
            }

        default :
            return state
    }
}


const store= createStore(Update_INFO_REDUCER)
console.log("initial state", store.getState())

const unsubscribe=store.subscribe(()=>{
    console.log("updated" , store.getState())
})


store.dispatch(updateInfo("uit-ned"))


unsubscribe()