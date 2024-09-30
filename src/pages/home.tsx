import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const secondHome = () => {
        navigate('/home2')
    }
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <ul>
                    <li onClick={secondHome}>Home 2</li>
                </ul>
            </div>
        </div>
    )
}

export default Home