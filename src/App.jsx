import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import About from "./pages/about"
import Home from "./pages/home"
import Home2 from "./pages/home2"

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <ul>
                    <Link to='/home'><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                </ul>
            </div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/home2" element={<Home2 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App