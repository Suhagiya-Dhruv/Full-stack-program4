import { useState } from "react"
import axios from "axios";
import { AlertCircle } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { useNavigate } from "react-router-dom";
const Login = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState({
        email: '',
        password: ''
    })

    const [message, setMessage] = useState('')

    const inputHandler = (e: any) => {
        const { name, value } = e.target;
        setValue(prev => ({ ...prev, [name]: value }))
    }

    const submit = async () => {
        await axios.post('http://localhost:5000/api/v1/user/login', value)
            .then(res => navigate('/home'))
            .catch(error => {
                setMessage(error.response.data.message);
                setTimeout(() => {
                    setMessage('');
                }, 4000);
            });
    }


    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="border-2 w-1/3 h-96 flex flex-col justify-center items-center gap-5">
                <h1 className="text-3xl">Login</h1>
                <input type="text"
                    placeholder="Email"
                    name='email'
                    className="border-2 outline-none w-2/3"
                    onChange={inputHandler}
                />

                <input type="password"
                    placeholder="Password"
                    name='password'
                    className="border-2 outline-none w-2/3"
                    onChange={inputHandler}
                />

                <button
                    className="bg-blue-400 py-2 px-10 rounded-md text-white font-bold"
                    onClick={submit}
                >
                    Login
                </button>
            </div>

            {message !== '' &&
                <Alert variant="destructive" className="absolute bottom-10 left-10 w-96">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        {message}
                    </AlertDescription>
                </Alert>
            }
        </div>
    )
}

export default Login