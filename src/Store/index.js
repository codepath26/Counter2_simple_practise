import { configureStore } from "@reduxjs/toolkit";
import  counterReducer from "./Counter";
import authReducer from "./Auth";

// const counterReducer = (state ={counter : 0}, action)=>{
//   if(action.type === "INCREMENT"){
//     return {
//       counter : state.counter + 1,
//     }
//   }
//   if(action.type === "INCREMENT5"){
//      return{
//       counter : state.counter +5
//      }
//   }
//   if(action.type === "DECREMENT"){
//      return{
//       counter : state.counter  -1,
//      }
//   }
//   if(action.type === "DECREMENTBY2"){
//      return{
//       counter : state.counter  -2,
//      }
//   }
//   if(action.type === "INCREMENTBY2"){
//      return{
//       counter : state.counter  +2,
//      }
//   }
//   if(action.type === "DECREMENTBY5"){
//      return{
//       counter : state.counter  -5,
//      }
//   }
//   if(action.type === "INCREMENTBY5"){
//      return{
//       counter : state.counter  +5,
//      }
//   }
//   return state;

// }

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,    
     // name properties is used to create the action.type name like for the counter name it's creat the unique action.type like counter/increament we are able to use the same name at this point or not it's depends on you.
  }
});

export default store;
