import React, { useState } from 'react'

const Counter2 = () => {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(5);
    const [inputValueNumber, setInputValue] = useState(0)

    const inputValue = (event) => {
        setInputValue(event.target.value);
    }

    const setValueFn = () => {
        setValue(Number(inputValueNumber))
    }

    return ( // render, re-render
        <>
            <h1>Counter 2</h1>
            <input type="Number" placeholder='Enter Number' onChange={inputValue} />
            <button onClick={setValueFn}>Set</button>
            <p>Current set value : {value}</p>
            <button onClick={() => { setCount(count + value) }}>Add</button>
            <button onClick={() => { setCount(count - value) }}>remove</button>
            <h1>{count}</h1>

        </>
    )
}

export default Counter2;