// what is action?
/*
What is action 
Make function in action file
Return data and type 
Add constant and use constat in action



*/
import {ADD_TO_CART,REMOVE_TO_CART} from '../constants'

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart = ()=>{
    return{
    type:REMOVE_TO_CART,
    data:data
    }
}


