import React, { useState } from 'react'
import Parent1 from './Parent1';
import { useDispatch } from 'react-redux';
import CounterSlice from './counter';

const App = () => {
    const dispatch = useDispatch();

    function countUpdate(e) {
        dispatch(CounterSlice.actions.incCount());
        
    }

    console.log("App.jsx ");
    return (
        <div>
            <button onClick={countUpdate}>Click</button>
            <Parent1 />
        </div>
    )
}

export default App

// useEffect(() => {
//     console.log("useEffect() called");
// })

// useEffect(() => {
//     console.log("useEffect() called");
// }, [])

// useEffect(() => {
//     console.log("useEffect() called");
// }, [count])

// useEffect(() => {
//     console.log("useEffect() called");

//     return () => {
//         alert("Cleanup function called");
//     }
// }, [])