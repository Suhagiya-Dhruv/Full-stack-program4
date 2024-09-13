import React, { useEffect, useMemo, useState } from 'react'




const App = () => {

    const [value, setValue] = useState('123');
    const [count, setCount] = useState(Number(localStorage.getItem('count')) || 0);

    function inputHandler(e) {
        setValue(e.target.value);
    }

    useEffect(() => {
        localStorage.setItem('count', count)
    }, [count])

    const data = useMemo(() => {
        return {
            name: "john",
            age: "123",
            count: count,
        }
    }, [])
    // const data = {
    //     name: "john",
    //     age: "123",
    //     count: count
    // }

    console.log(data);

    return (
        <div>
            <input type="text" onChange={inputHandler} value={value} />
            <button onClick={() => setCount(count + 1)}>Click</button>
            <button onClick={() => setCount(count - 1)}>- Click</button>
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