const redux=require("redux");
const create_store =redux.legacy_createStore
const applyMiddleware=redux.applyMiddleware
const axios=require("axios")
const thunk_middleware=require("redux-thunk").default;

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
const Fetch_User_REQ=()=>{
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




// const actions= bindActionCreater({Fetch_User_Succeeded ,Fetch_User_failed ,Fetch_User },store.dispatch)


// actions.Fetch_User_Succeed



const fetch_User=()=>{
    return function ( dispatch){
     dispatch(Fetch_User_REQ)
            axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
                    const users=res.data.map((user)=>{
                        return user.id
                    })
                    dispatch(Fetch_User_Succeeded(users))
            }).catch(e=>{
                dispatch(Fetch_User_failed(e))
            })

    }
    }

    // fetch_User()
    
    


    const store= create_store(reducer, applyMiddleware(thunk_middleware))


    store.subscribe(()=>{
        console.log(store.getState())
    })


store.dispatch(fetch_User())
