import React from 'react'
import './style.css'

const Layout = (props) => {

    const { name, children } = props
    return (
        <div className='main'>
            <h1>Nav</h1>
            {/* sdjfklsdjfklsdl */}
            {/* {children} */}
            {children}
            {name}
            <h1>Footer</h1>
        </div>
    )
}

export default Layout;