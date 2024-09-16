import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'John Doe',
        age: 30,
        email: 'john@example.com',
        mobile: 4564841959498
    },
    reducers: {
    }
});

export default userSlice;