const redux=require("redux");
const create_store =redux.legacy_createStore()

const initialState={
    loading:false,
    users:[],
    error:''
}

//action
const FETCH_USERS_REQUESTED="FETCH_USERS"
const FETCH_USERS_SUCCESS="FETCH_USERS_SUCCESS"
const FETCH_FAILED="FETCH FAILED"


//action creators
const Fetch_User=()=>{
    return {
        type:FETCH_USERS_REQUESTED,
    }
}

const Fetch_User_Succeeded=(users)=>{
    return {
            type:FETCH_USERS_SUCCESS,
            payload:users
    }
}

const Fetch_User_failed=(error)=>{
    return {
            type:FETCH_FAILED,
            payload:error
    }
}


const reducer=(state=initialState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading:true
                
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state, 
                loading :false,
                users:action.payload,
                error:" "
            } 

        case FETCH_FAILED :
            return {
                ...state,
                loading:false,
                user:[],
                error:"Error"
            }
    }
}


const store= create_store(reducer)