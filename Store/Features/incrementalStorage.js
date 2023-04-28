import { createSlice } from "@reduxjs/toolkit";

const initialState = { Hobbies: [""], Awards: [""] };

const hobbiesSlice = createSlice({
    name: "hobbies",
    initialState,
    reducers: {
        add: (state, action) => {
            const { index, value, title } = action.payload;
            return {
                ...state,
                [title]: state[title].map((item, i) => {
                    if (i === index) {
                        return value;
                    }
                    return item;
                }),
            };
        },
        addMore: (state, action) => {
            const { category } = action.payload;
            if (category === "Hobbies") {
                const temp = [...state.Hobbies]
                temp.push("");
                const newState = { ...state, Hobbies: temp }
                return newState
            } else {
                const temp = [...state.Awards]
                temp.push("");
                const newState = { ...state, Awards: temp }
                return newState
            }
        },
        removeItem: (state, action) => {
            const { category, index } = action.payload;
            if (category === "Hobbies") {
                state.Hobbies.splice(index, 1);
            } else {
                state.Awards.splice(index, 1);
            }
        }
    }
});

export const { add, addMore, removeItem } = hobbiesSlice.actions;

export default hobbiesSlice.reducer;
