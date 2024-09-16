import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        name: "",
        count: 0,
        email: ""
    },
    reducers: {
        // Action
        getCount(state, action) {
            return state
        },
        decCount(state, action) {
            return state - 1;
        },
        incCount(state) {
            // return state + 1;
            state.count = state.count + 1

        }
    }
});

export default CounterSlice;