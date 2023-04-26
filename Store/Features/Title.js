import { createSlice } from "@reduxjs/toolkit";

const initialState = ""

const title = createSlice({
    name: "title",
    initialState,
    reducers: {
        updateTitle: (state, actions) => {
            return state = actions.payload
        }
    }
})

export const { updateTitle } = title.actions;

export default title.reducer;