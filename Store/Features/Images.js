import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    imgOne: null,
    imgTwo: null,
    imgThree: null,
}


const updateImages = createSlice({
    name: "update",
    initialState,
    reducers: {
        imageFunction: (state, { payload }) => {
            const temp = { ...state };
            temp[payload[0]] = payload[1];
            return temp;
        },
    }
})


export const { imageFunction } = updateImages.actions;

export default updateImages.reducer;