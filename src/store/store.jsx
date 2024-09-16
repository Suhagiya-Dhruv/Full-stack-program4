import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../counter';
import userSlice from '../user';

const store = configureStore({
    reducer: {
        // all reducers
        counter: CounterSlice.reducer,
        user: userSlice.reducer
    },
})

export default store;