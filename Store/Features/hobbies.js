import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ one: "" }]

const hobbies = createSlice({
    name: "hobbies",
    initialState,
    reducers: {
        add: (state, actions) => {

        },
        remove: (state, actions) => {

        },
        update: (state, actions) => {

        }
    }
})


const { add, remove, update } = hobbies.actions

export default hobbies.reducer