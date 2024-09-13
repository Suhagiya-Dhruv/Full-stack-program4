import React, { memo } from 'react'

const Child12 = () => {
    console.log('Child12')

    return (
        <div>Child12</div>
    )
}

export default memo(Child12)