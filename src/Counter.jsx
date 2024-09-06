import React, { useState } from 'react'

const Counter = () => {

    // useState
    // console.log(useState('5')[0]);
    // console.log(useState('5')[1]);

    const [value, setValue] = useState(0); // value , function
    // const fn = useState()[1]; // value, function

    // const array = [1,2,3];

    // const [a, fn, b] = array;

    // let count = 0;
    // JavaScript
    // console.log(value)
    // function clickHandler() {
    // count++;
    //     setValue(value + 1)
    //     console.log("Button Clicked")
    // }

    function clickPlusHandler() {
        setValue(value + 1)
    }

    const clickMinusHandler = () => {
        setValue(value - 1)
    }

    return ( // render, re-render
        <>
            <h1>Counter</h1>
            <h1>{value}</h1>
            <button onClick={clickPlusHandler}>Plus</button>
            <button onClick={clickMinusHandler}>Minus</button>
            <button onClick={() => { setValue(0) }}>Reset</button>

        </>
    )
}

export default Counter;