import { createSlice } from "@reduxjs/toolkit";

const addtocartSlice = createSlice(
    {
        name: "addtocartSlice",
        initialState: {
            data: []
        },
        reducers:{
            addtocart: (state,action)=>{
                console.log(action.payload)
                state.data.push({...action.payload,quantity: 1});
            },
            increment: (state,action)=>{
                const cartValue = state.data.find(item => item.id === action.payload)
                if(cartValue)
                {
                    cartValue.quantity += 1;
                }
            },
            decrement: (state,action)=>{
                const cartValue = state.data.find(item => item.id === action.payload)
                if(cartValue && cartValue.quantity > 1)
                {
                    cartValue.quantity -=1;
                }
            },
            remove:(state,action)=>{
                const removeValue = state.data.find((item)=> item.id === action.payload)
                if(removeValue)
                {
                    state.data.pop();
                }
            }
        }
    }
)

export const {addtocart, increment, decrement, remove} = addtocartSlice.actions;
export default addtocartSlice.reducer;