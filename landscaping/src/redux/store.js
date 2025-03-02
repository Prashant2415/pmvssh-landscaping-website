import { configureStore } from "@reduxjs/toolkit";
import addtocartReducer from "./addtocardSlice";
export const store = configureStore(
    {
        reducer: {
            addtocartSlice: addtocartReducer
        }
    }
)