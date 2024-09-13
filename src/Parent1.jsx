import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './child2'

const Parent1 = () => {
    console.log('Parent')
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>click</button>
            <Child1 count={count}/>
            <Child2 />
        </div>
    )
}

export default Parent1