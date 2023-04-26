import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ value: "" }]

const awards = createSlice({
    name: "awards",
    initialState,
    reducers: {
        add: (state, actions) => {
            return [...state, { value: "" }]
        },
        remove: (state, actions) => {
            return state.pop()
        },
        update: (state, actions) => {
            
        }
    }
})


const { add, remove, update } = awards.actions

export default awards.reducer