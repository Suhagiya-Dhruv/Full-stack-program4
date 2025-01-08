import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Auth from "./auth/auth";
import Quiz from "./pages/quiz";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<Auth><Home /></Auth>} />
        <Route path="/quiz" element={<Auth><Quiz /></Auth>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App