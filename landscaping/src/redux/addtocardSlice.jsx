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
                state.data.push(action.payload);
            }
        }
    }
)

export const {addtocart} = addtocartSlice.actions;
export default addtocartSlice.reducer;