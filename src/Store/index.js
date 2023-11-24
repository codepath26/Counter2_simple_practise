import {  configureStore } from '@reduxjs/toolkit';

const counterReducer = (state ={counter : 0}, action)=>{
  if(action.type === "INCREMENT"){
    return {
      counter : state.counter + 1,
    }
  }
  if(action.type === "INCREMENT5"){
     return{
      counter : state.counter +5
     }
  }
  if(action.type === "DECREMENT"){
     return{
      counter : state.counter  -1,
     }
  }
  if(action.type === "DECREMENTBY2"){
     return{
      counter : state.counter  -2,
     }
  }
  if(action.type === "INCREMENTBY2"){
     return{
      counter : state.counter  +2,
     }
  }
  return state;

}

const store = configureStore({
reducer :  counterReducer,
});

export default store;