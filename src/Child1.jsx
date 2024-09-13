import React, { memo } from 'react'
import Child12 from './Child1-2'

const Child1 = (props) => {

    const { count } = props
    console.log('Child1')

    return (
        <div>
            <h1>{count}</h1>
            <Child12 />
        </div>
    )
}

export default memo(Child1)