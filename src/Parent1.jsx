import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './child2'

const Parent1 = () => {
    console.log('Parent1.jsx')
    return (
        <div>
            <Child1 />
            <Child2 />
        </div>
    )
}

export default Parent1