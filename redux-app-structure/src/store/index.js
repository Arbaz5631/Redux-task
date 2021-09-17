import { createStore } from "redux";
import { createSlice ,configureStore} from "@reduxjs/toolkit";
const initialCounterState={counter:0}
const reducerState= createSlice({
    name:"counter",
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter+=action.payload ;
        }
    }
})
const authState={isAuthenticated:false}
const authStateSlice=createSlice({
    name:"authentication",
    initialState:authState,
    reducers:{
        login(state){
           state.isAuthenticated=true;
        }
        ,
        logout(state){
           state.isAuthenticated=false;
        }
    }
});
const store=configureStore({reducer:{counter:reducerState.reducer,auth:authStateSlice.reducer}});
export const counterActions=reducerState.actions;
export const authActions=authStateSlice.actions;

// const reducerFunction=(state=initialState,action)=>{
//     if(action.type=="increment"){
//         return{
//             counter:state.counter+1,
//         }
//     }
    
//     if(action.type=="decrement"){
//         return{
//             counter:state.counter-1,
//         }
//     }
//     if(action.type=="increase"){
//         return{
//             counter:state.counter+5,
//         }
//     }
//  return state; 

// }

// const store=createStore(reducerFunction);



export default store;