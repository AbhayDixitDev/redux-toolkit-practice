

import { createSlice } from "@reduxjs/toolkit";


const colorSlice = createSlice({
    name:"bgcolor",
    initialState:{
        bgcolor:"red"
    },
    reducers:{
        bgcolorChange:(state,action)=>{
            state.bgcolor=action.payload.clr;
        }
    }
})

export default colorSlice.reducer
export const {bgcolorChange} = colorSlice.actions