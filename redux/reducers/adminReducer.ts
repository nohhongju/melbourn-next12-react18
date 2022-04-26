import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {}

export const adminSlice = createSlice({
    name: 'admins',
    initialState,
    reducers: {},
    extraReducers: {
        [HYDRATE] : () => {
            console.log(action.payload)
            return action.payload.admin
        }
    }
})
export default adminSlice.reducer
