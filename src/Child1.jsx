import React, { memo } from 'react'
import Child12 from './Child1-2'
import { useSelector } from 'react-redux'

const Child1 = () => {

    const { name, age, email } = useSelector(store => store.user)
    // console.log('Child1.jsx', count)

    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{email}</h1>
            <Child12 />
        </div>
    )
}

export default memo(Child1)